import { NextApiRequest, NextApiResponse } from 'next';
import { getReports } from '../services/reportService';
import { handleError } from '../../utils/errorHandler';
import { IFilter } from '@/types/filter';
import { HttpStatusCode } from 'axios';

export const reportController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const filter: IFilter = req.query;
      const data = await getReports(filter);
      res.status(HttpStatusCode.Ok).json(data);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    handleError(res, error);
  }
};