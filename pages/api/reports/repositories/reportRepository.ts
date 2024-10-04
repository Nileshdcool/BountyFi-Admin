import { PrismaClient } from '@prisma/client';
import { Reports } from '../../types/reportTypes';
import { IFilter } from '@/types/filter';

const prisma = new PrismaClient();

const buildWhereClause = (filter: IFilter) => {
  const where: any = {};
  if (filter.status) where.status = { equals: filter.status.toLowerCase()};
  if (filter.reportId) where.id = Number(filter.reportId);
  if (filter.hacker) where.user = { email: { contains: filter.hacker.toLowerCase(), mode: 'insensitive' } };
  if (filter.severity) where.severity = { equals: filter.severity.toLowerCase()};
  if (filter.reportType) where.type = { equals: filter.reportType.toLowerCase()};
  if (filter.submissionDate) {
    const date = new Date(filter.submissionDate);
    where.createdAt = {
      gte: new Date(date.setHours(0, 0, 0, 0)),
      lt: new Date(date.setHours(24, 0, 0, 0)),
    };
  }
  return where;
};

export const getReportsFromDB = async (skip: number, take: number, filter: IFilter): Promise<Reports> => {
  try {
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
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching reports');
  }
};

export const getTotalReportsCount = async (filter: IFilter): Promise<number> => {
  try {
    const where = buildWhereClause(filter);
    return prisma.report.count({ where });
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching reports count');
  }
};
