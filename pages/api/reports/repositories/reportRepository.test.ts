// import { PrismaClient } from '@prisma/client';
// import { getReportsFromDB, getTotalReportsCount } from './reportRepository';
// import { IFilter } from '@/types/filter';

// jest.mock('@prisma/client');

// const prismaMock = new PrismaClient() as jest.Mocked<PrismaClient>;

// describe('reportRepository', () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     describe('getReportsFromDB', () => {
//         it('should fetch reports from the database', async () => {
//             const mockReports = [
//                 {
//                     id: 1,
//                     status: 'open',
//                     createdAt: new Date(),
//                     project: { id: 1, name: 'Project 1' },
//                     user: { id: 1, email: 'user@example.com' },
//                 },
//             ];

//             (prismaMock.report.findMany as jest.Mock).mockResolvedValue(mockReports);

//             const filter: IFilter = { status: 'open' };
//             const reports = await getReportsFromDB(0, 10, filter);

//             expect(prismaMock.report.findMany).toHaveBeenCalledWith({
//                 skip: 0,
//                 take: 10,
//                 where: { status: 'open' },
//                 include: { project: true, user: true },
//             });
//             expect(reports).toEqual(
//                 mockReports.map(report => ({
//                     ...report,
//                     createdAt: report.createdAt.toISOString(),
//                 }))
//             );
//         });

//         it('should throw an error if fetching reports fails', async () => {
//             (prismaMock.report.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

//             const filter: IFilter = { status: 'open' };

//             await expect(getReportsFromDB(0, 10, filter)).rejects.toThrow('Error fetching reports');
//         });
//     });

//     describe('getTotalReportsCount', () => {
//         it('should return the total count of reports', async () => {
//             (prismaMock.report.count as jest.Mock).mockResolvedValue(5);

//             const filter: IFilter = { status: 'open' };
//             const count = await getTotalReportsCount(filter);

//             expect(prismaMock.report.count).toHaveBeenCalledWith({ where: { status: 'open' } });
//             expect(count).toBe(5);
//         });

//         it('should throw an error if fetching reports count fails', async () => {
//             (prismaMock.report.count as jest.Mock).mockRejectedValue(new Error('Database error'));

//             const filter: IFilter = { status: 'open' };

//             await expect(getTotalReportsCount(filter)).rejects.toThrow('Error fetching reports count');
//         });
//     });
// });