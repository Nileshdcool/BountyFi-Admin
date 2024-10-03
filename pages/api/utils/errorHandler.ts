import { NextApiResponse } from 'next';

export const handleError = (res: NextApiResponse, error: any) => {
  if (error.name === 'ValidationError') {
    res.status(400).json({ error: 'Validation Error', details: error.message });
  } else if (error.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized', details: error.message });
  } else if (error.name === 'NotFoundError') {
    res.status(404).json({ error: 'Not Found', details: error.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};