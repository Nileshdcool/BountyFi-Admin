import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const withLogging = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export const withAuth = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  // Add your authentication logic here
  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  next();
};