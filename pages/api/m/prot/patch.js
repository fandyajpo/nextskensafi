import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
import { checkerToken } from "lib/listFunct";

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

    try {
      let resx = await fetchJson(`${process.env.SERVICE_URL}${req.body.uri}`, {
                    method: `PATCH`,
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + user.access_token },
                    body: JSON.stringify(req.body),
                   });
       return res.status(200).json({
         refresh: (validationToken.status === "refresh" ? user : false),
         all: resx
       })
     } catch (e) {
       return res.status(400).json({
         refresh: (validationToken.status === "refresh" ? user : false),
         message: (e?.data ? e.data : "Please check network connection.")
       });
     }

  }

}, sessionOptions);
