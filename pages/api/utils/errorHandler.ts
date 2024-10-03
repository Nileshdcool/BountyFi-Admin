import { NextApiResponse } from 'next';

export const handleError = (res: NextApiResponse, error: any) => {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
};