import { getReportsFromDB, getTotalReportsCount } from '../repositories/reportRepository';
import { ReportsResponse } from "../../types/reportTypes";
import { IFilter } from '@/types/filter';

export const getReports = async (filter: IFilter): Promise<ReportsResponse> => {
  const skip = (Number(filter.page) - 1) * Number(filter.limit);
  const reports = await getReportsFromDB(skip, Number(filter.limit), filter);
  const totalReports = await getTotalReportsCount(filter);

  return {
    reports,
    meta: {
      page: Number(filter.page),
      totalPages: Math.ceil(totalReports / Number(filter.limit)),
    },
  };
};

