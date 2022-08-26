import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
import { checkerToken } from "lib/listFunct";

export default withIronSessionApiRoute(async (req, res) => {
  // var user = await req.session;
  // if (!user || !user.access_token) {
  //   res.status(500).json({ message: "unauthorized" });
  // }

  // const validationToken = await checkerToken(user);
  // if (validationToken.hasOwnProperty("error")) {
  //   await req.session.destroy();
  //   res.status(500).json({ message: "unauthorized" });
  // }

  // if (validationToken.hasOwnProperty("status")) {
  //   if (
  //     validationToken.hasOwnProperty("status") &&
  //     validationToken.status === "refresh"
  //   ) {
  //     user = {
  //       isLoggedIn: true,
  //       access_token: validationToken.access_token,
  //       refresh_token: validationToken.refresh_token,
  //     };
  //     req.session = user;
  //     await req.session.save();
  //   }

  try {
    let resx = await fetchJson(
      // `${process.env.SERVICE_URL}${req.query.uri}?${new URLSearchParams(
      //   req.query
      // )}`,
      `http://127.0.0.1:3001/pengumuman/list`,
      {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + user.access_token,
        },
      }
    );

    return res.status(200).json({
      all: resx,
    });
  } catch (e) {
    return res.status(400).json({
      message: e?.data ? e.data : "Please check network connection.",
    });
  }
  // }
}, sessionOptions);
