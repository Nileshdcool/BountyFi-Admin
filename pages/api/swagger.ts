import { NextApiRequest, NextApiResponse } from 'next';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../swagger';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.send(swaggerUi.generateHTML(swaggerSpec));
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}