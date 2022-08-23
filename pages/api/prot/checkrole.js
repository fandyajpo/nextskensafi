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

  return res.status(200).json({
    role: user.role,
  })

}

export default checker;
