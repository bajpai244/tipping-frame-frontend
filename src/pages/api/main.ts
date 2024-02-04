// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
 // Return an HTML response
 res.setHeader('Content-Type', 'text/html');

 res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
<title>Vote Recorded</title>
<meta property="og:title" content="Vote Recorded">
<meta name="fc:frame" content="vNext">
<meta name="fc:frame:image" content="">
<meta name="fc:frame:post_url" content="https://825b-2406-7400-63-d14b-00-102.ngrok-free.app/api/handle_payload">
<meta property="fc:frame:button:1" content="Deposit" />
<meta property="fc:frame:button:2" content="Tip" />
<meta property="fc:frame:button:3" content="Balance" />
<meta property="fc:frame:button:4" content="Withdraw" />
<meta property="fc:frame:input:text" content="amount to tip" />
</head>
<body>
</body>
</html>
`);
}
