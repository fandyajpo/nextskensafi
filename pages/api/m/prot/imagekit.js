// import { withIronSessionApiRoute } from "iron-session/next";
// import { sessionOptions } from "lib/session";
// import { v4 as uuidv4 } from 'uuid';
// import crypto from "crypto"
//
// export default withIronSessionApiRoute(async (req, res) => {
//   var token = uuidv4();
//
//   var expire = req.query.expire || parseInt(Date.now()/1000)+2400;
//   var privateAPIKey = `${process.env.PRIVATE_KEY}`;
//   var signature = crypto.createHmac('sha1', privateAPIKey).update(token+expire).digest('hex');
//   res.status(200).json({
//       token : token,
//       expire : expire,
//       signature : signature
//   });
//
// }, sessionOptions);
