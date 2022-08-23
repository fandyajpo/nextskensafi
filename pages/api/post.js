import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
import { findUsername } from "lib/arangoDb";

import { posterGo, goClient, logGer, getterSkensa } from "lib/ctx";
const browserObject = require("lib/Browser");
const pageScraper = require("lib/pageScraper");

export default withIronSessionApiRoute(async (req, res) => {
  var resx,
    checkMoodle,
    detailLogin,
    browserInstance,
    user = await req.session;

  const saveSess = async (r) => {
    user = {
      access_token: r.access_token,
      refresh_token: r.refresh_token,
      role: r.all.profile.role,
      username: req.body.username,
      password: req.body.password,
    };
    req.session = user;
    await req.session.save();
  };

  const toGoApi = async (r, s) => {
    const toGo = await posterGo([r.uri, r]);
    if (toGo?.data?.access_token && toGo?.data?.refresh_token) {
      await saveSess(toGo.data);
    }
    return toGo;
  };

  if (req?.body?.uri === "back_login") {
    req.body.username = req.body.username.toLowerCase();

    const checkUser = await findUsername(req?.body?.username);

    if (checkUser?.[0]) {
      const lgn = await toGoApi(req.body, checkUser);

      // if (lgn.status) {
      //   return res
      //     .status(200)
      //     .json({
      //       nama: lgn.data.all.profile.nama_lengkap,
      //       role: lgn.data.all.profile.role,
      //     });
      // } else {
      //   return res.status(400).json({ message: "Unknown check." });
      // }
    } else {
      // checkMoodle = await getterSkensa([
      //   `login/token.php`,
      //   {
      //     params: {
      //       service: "moodle_mobile_app",
      //       username: req.body.username,
      //       password: req.body.password,
      //     },
      //   },
      // ]);
      // if (!checkMoodle?.data?.token && !checkMoodle?.data?.privatetoken) {
      //   return res.status(400).json({ message: "Failed connected to moodle." });
      // }
      // req.body.token = checkMoodle.data.token;
      // req.body.privatetoken = checkMoodle.data.privatetoken;
      // try {
      //   browserInstance = browserObject.startBrowser();
      //   detailLogin = await pageScraper.getDataMurid(
      //     browserInstance,
      //     req.body.username,
      //     req.body.password,
      //     req.body.token,
      //     req.body.privatetoken
      //   );
      //   req.body.nama = detailLogin.nama;
      //   req.body.type = detailLogin.type;
      //   req.body.userid = detailLogin.userId;
      //   req.body.uri = "register";
      //   const lgn = await toGoApi(req.body, checkUser);
      //   if (lgn.status) {
      //     return res
      //       .status(200)
      //       .json({ nama: detailLogin.nama, role: detailLogin.type });
      //   } else {
      //     return res.status(400).json({ message: "Unknown check." });
      //   }
      // } catch (error) {
      //   return res.status(400).json({ message: "Error connection to Moodle." });
      // }
    }
  }

  return res.status(400).json({ message: "Unknown error." });
}, sessionOptions);
