import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const authMiddleware = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Add your authentication logic here
    return handler(req, res);
  };
};