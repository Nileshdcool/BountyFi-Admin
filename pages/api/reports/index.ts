/**
 * @swagger
 * /api/reports:
 *   get:
 *     description: Get all reports
 *     responses:
 *       200:
 *         description: Success
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { reportController } from './controllers/reportController';
import { authMiddleware } from '../middlewares/authMiddleware';

export default authMiddleware(reportController);