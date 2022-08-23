import { withIronSessionApiRoute } from "iron-session/next";
import fetchJson, { FetchError } from "lib/fetchJson";
import { checkerToken } from "lib/listFunct";

import { unsealData, sealData } from "iron-session";
import { sessionOptions } from "lib/session";

const checker = async (req, res) => {

  var seal, user = await unsealData(req.body.token, sessionOptions);

  if (!user || !req.body || !req.body.token) {
    return res.status(500).json({ message: "unauthorized" });
  }

  const validationToken = await checkerToken( user );

  if (validationToken?.error) {
    return res.status(500).json({ message: "unauthorize" });
  }

  if ( validationToken?.status && validationToken.status === "refresh" ) {
    seal = await sealData({isLoggedIn: true, access_token: validationToken.access_token, refresh_token: validationToken.refresh_token}, sessionOptions);
  }

  res.status(200).json({
    status: validationToken.status === "refresh" ? "refresh" : "ok",
    seal: validationToken.status === "refresh" ? seal : null
  })

}

export default checker;
