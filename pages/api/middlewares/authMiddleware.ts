import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { NextHandler } from 'next-connect';

export const authMiddleware = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res);
  };
};

export const withLogging = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export const withAuth = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  next();
};