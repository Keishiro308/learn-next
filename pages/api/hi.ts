import type { NextApiRequest, NextApiResponse } from 'next'

type HiResponse = {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<HiResponse>) => {
  res.status(200).json({ name: 'John Doe' })
}