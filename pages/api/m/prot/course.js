import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
import { checkerToken } from "lib/listFunct";
import { skensaClient, skensaApiClient, logGer } from 'lib/ctx'
import { findUserKey } from "lib/arangoDb";

export default withIronSessionApiRoute(async (req, res) => {

  var user = {};

  const bearerHeader = req.headers['authorization'];

  if (!bearerHeader) {
    return res.status(400).json({ message: "unauthorized" });
  }

  const findBearer = bearerHeader.split("Bearer ");
  const findSkensa = findBearer[1].split("skensa");

  if (!bearerHeader || findSkensa.length < 2) {
    return res.status(400).json({ message: "unauthorized" });
  }

  user = { isLoggedIn: true, access_token: findSkensa[0], refresh_token: findSkensa[1] }

  const validationToken = await checkerToken( user )
  if ( validationToken.hasOwnProperty('error') ) {
    return res.status(400).json({ message: "unauthorized" });
  }

  if ( validationToken.hasOwnProperty('status') ) {

    if ( validationToken.hasOwnProperty('status') && validationToken.status === "refresh" ) {
      user = { isLoggedIn: true, access_token: validationToken.access_token, refresh_token: validationToken.refresh_token };
    }

    const userKey = await JSON.parse(atob(user.access_token.split('.')[1]));
    const checkUser = await findUserKey(userKey.user_id);

    var course
    try {

        const checkCourse = await skensaApiClient.get(
          `webservice/rest/server.php`,
          {
            params: {
              wsfunction: 'core_enrol_get_users_courses',
              moodlewsrestformat: 'json',
              wstoken: checkUser[0].mood_token,
              userid: checkUser[0].mood_userid
            }
          }
        );

        course = checkCourse.data;
        const someFunction = async(myArray) => {
          const promises = myArray.map(async (v, i) => {
            const tugas = await skensaApiClient.get(
              `webservice/rest/server.php`,
              {
                params: {
                  wsfunction: 'core_course_get_contents',
                  courseid: v.id,
                  moodlewsrestformat: 'json',
                  wstoken: checkUser[0].mood_token
                }
              }
            );
            course[i].detail = tugas.data
            return
          });
          return Promise.all(promises);
        }

        await someFunction(course)

        return res.status(200).json({
         refresh: (validationToken.status === "refresh" ? user : false),
         all: { course: course }
        })
     } catch (e) {
       return res.status(400).json({
         refresh: (validationToken.status === "refresh" ? user : false),
         message: (e?.data ? e.data : "Please check network connection.")
       });
     }
  }

}, sessionOptions);
