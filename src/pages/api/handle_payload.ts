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

// make sure to set your NEYNAR_API_KEY .env
const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY);
const validatedMessage = await client.validateFrameAction(req.body.trustedData.messageBytes);

const {valid} = validatedMessage;

  console.log(`validated Message ${validatedMessage.valid}`);
  console.log(`validated Message ${validatedMessage.cast}`);
}
