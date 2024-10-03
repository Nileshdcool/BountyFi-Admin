import { NextApiRequest, NextApiResponse } from 'next';
import { getReports } from '../services/reportService';
import { handleError } from '../../utils/errorHandler';

export const reportController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { page = 1, limit = 10 } = req.query;
      const data = await getReports(Number(page), Number(limit));
      res.status(200).json(data);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    handleError(res, error);
  }
};