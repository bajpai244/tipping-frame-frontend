// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"

import { NeynarAPIClient } from "@neynar/nodejs-sdk";

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
  <meta property="og:title" content="Vote Recorded">
  <meta name="fc:frame" content="vNext">
  <meta name="fc:frame:image" content="">
  <meta name="fc:frame:post_url" content="https://6ed5-2406-7400-63-d14b-00-102.ngrok-free.app/api/handle_payload">
  <meta name="fc:frame:input:text" content="Input farcaster Username"/>
  <meta property="fc:frame:button:1" content="Confirm" />`);

// make sure to set your NEYNAR_API_KEY .env
// const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY);
// const validatedMessage = await client.validateFrameAction(req.body.trustedData.messageBytes);

// const valid = validatedMessage.valid;
// const userFid = validatedMessage.action?.interactor.fid;
// const tapped_button = validatedMessage.action?.tapped_button.index;
// const input = validatedMessage.action.input.text;

// console.log('valid', valid);
// console.log('user fid', userFid);
// console.log('tapped button', tapped_button);
// console.log('input', input);

// console.log(validatedMessage.action);

// // user wants to tip
// if (tapped_button == 2) {
//   // Return an HTML response
//   res.setHeader('Content-Type', 'text/html');
//   res.status(200).send(tip_choose_address);
// }
}


const tip_choose_address = `<!DOCTYPE html>
<html>
<head>
<title>Vote Recorded</title>
<meta property="og:title" content="Vote Recorded">
<meta name="fc:frame" content="vNext">
<meta name="fc:frame:image" content="">
<meta name="fc:frame:post_url" content="https://6ed5-2406-7400-63-d14b-00-102.ngrok-free.app/api/handle_payload">
<meta name="fc:frame:input:text" content="Input farcaster Username"/>
<meta property="fc:frame:button:1" content="Confirm" />
</head>
<body>
</body>
</html>`
