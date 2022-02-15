import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email
  res.status(200).json({ test: "Hello "})
}

export default handler;