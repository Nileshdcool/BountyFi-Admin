import { PrismaClient } from '@prisma/client';
import { Reports } from '../../types/reportTypes';
import { IFilter } from '@/types/filter';

const prisma = new PrismaClient();

const buildWhereClause = (filter: IFilter) => {
  const where: any = {};
  if (filter.status) where.status = filter.status.toLowerCase();
  if (filter.reportId) where.id = Number(filter.reportId);
  if (filter.hacker) where.user = { email: filter.hacker.toLowerCase() };
  if (filter.severity) where.severity = filter.severity.toLowerCase();
  if (filter.reportType) where.type = filter.reportType.toLowerCase();
  return where;
};

export const getReportsFromDB = async (skip: number, take: number, filter: IFilter): Promise<Reports> => {
  const where = buildWhereClause(filter);
  const reports = await prisma.report.findMany({
    skip,
    take,
    where,
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

export const getTotalReportsCount = async (filter: IFilter): Promise<number> => {
  const where = buildWhereClause(filter);
  return prisma.report.count({ where });
};
