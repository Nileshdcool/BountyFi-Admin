import { handleError } from './errorHandler';
import { NextApiResponse } from 'next';

describe('handleError', () => {
    let res: NextApiResponse;

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as any;
    });

    it('should handle ValidationError', () => {
        const error = { name: 'ValidationError', message: 'Invalid input' };
        handleError(res, error);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Validation Error', details: error.message });
    });

    it('should handle UnauthorizedError', () => {
        const error = { name: 'UnauthorizedError', message: 'Unauthorized access' };
        handleError(res, error);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized', details: error.message });
    });

    it('should handle NotFoundError', () => {
        const error = { name: 'NotFoundError', message: 'Resource not found' };
        handleError(res, error);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Not Found', details: error.message });
    });

    it('should handle unknown errors', () => {
        const error = { name: 'UnknownError', message: 'Something went wrong' };
        handleError(res, error);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error', details: error.message });
    });
});