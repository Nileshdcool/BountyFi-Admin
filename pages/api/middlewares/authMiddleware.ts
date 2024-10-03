import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const authMiddleware = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    return handler(req, res);
  };
};