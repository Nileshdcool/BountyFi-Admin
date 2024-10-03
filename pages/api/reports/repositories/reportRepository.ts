import { PrismaClient } from '@prisma/client';
import { Reports } from '../../types/reportTypes';

const prisma = new PrismaClient();

export const getReportsFromDB = async (skip: number, take: number): Promise<Reports> => {
  const reports = await prisma.report.findMany({
    skip,
    take,
    include: {
      project: true,
      user: true,
    },
  });

  return reports.map(report => ({
    ...report,
    createdAt: report.createdAt.toISOString(),
  }));
};

export const getTotalReportsCount = async (): Promise<number> => {
  return prisma.report.count();
};