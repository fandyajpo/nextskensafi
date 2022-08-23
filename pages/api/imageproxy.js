// const fs = require('fs');
//
// export default async (req, res) => {
//
//   const url = decodeURIComponent(req.query.url);
//   var s = fs.createReadStream(url);
//
//   const result = await fetch(url);
//   const body = await result.body;
//   // console.log( res )
//   // s.pipe(res);
//   body.pipe( fs.createWriteStream(res) )
// };
import { withImageProxy } from '@blazity/next-image-proxy'

export default withImageProxy()
