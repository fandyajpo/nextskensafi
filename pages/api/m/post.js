import React from "react";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
// import fetchJson, { FetchError } from "lib/fetchJson";
import { goClient, skensaApiClient, logGer } from 'lib/ctx'

const browserObject = require('lib/Browser');
const pageScraper = require('lib/pageScraper');
import { findUsername } from "lib/arangoDb";

export default withIronSessionApiRoute(async (req, res) => {

  if (!req?.body?.uri) {
    return res.status(400).json({ message: 'invalid data.' })
  }

  var resx, checkLogin, detailLogin, checkUser;
  try {

    if ( req?.body?.uri === 'login') {

      req.body.username =  req.body.username.toLowerCase();

      checkLogin = await skensaApiClient.get(
        `login/token.php`,
        {
          params: {
            service: 'moodle_mobile_app',
            username: req.body.username,
            password: req.body.password
          }
        }
      );
      if (!checkLogin?.data?.token && !checkLogin?.data?.privatetoken) {
        return res.status(400).json({ message: checkLogin?.data?.errorcode ? checkLogin.data.errorcode : 'Invalid password.' });
      };
      req.body.token = checkLogin.data.token;
      req.body.privatetoken = checkLogin.data.privatetoken;

      checkUser = await findUsername(req.body.username);

      req.body.uri = checkUser.length < 1 ? 'register' : 'login';

      if (req.body.uri === 'register') {
        try {
          let browserInstance = browserObject.startBrowser();
          detailLogin = await pageScraper.getDataMurid(browserInstance, req.body.username, req.body.password, checkLogin.data.token, checkLogin.data.privatetoken);
          req.body.nama = detailLogin.nama;
          req.body.type = detailLogin.type;
          req.body.userid = detailLogin.userId;
        } catch (error) {
          return res.status(400).json({ message: 'Failed connection to Moodle.' });
        }
      }

    }

    resx = await goClient.post(
      `${req.body.uri}`,
      req.body
    );

    if (req.body.uri === 'register') {
      resx.data.all.course = detailLogin.course
    }

    return res.status(200).json(resx.data);

  } catch (e) {
    return res.status(400).json({
      message: (e?.response?.data ? e.response.data : "Please check network connection.")
    });
  }
}, sessionOptions);
