import { getReportsFromDB } from '../repositories/reportRepository';
import { getTotalReportsCount } from '../repositories/reportRepository';
import { ReportsResponse } from "../../types/reportTypes";


export const getReports = async (page: number, limit: number): Promise<ReportsResponse> => {
  const skip = (page - 1) * limit;
  const reports = await getReportsFromDB(skip, limit);
  const totalReports = await getTotalReportsCount();

  return {
    reports,
    meta: {
      page,
      totalPages: Math.ceil(totalReports / limit),
    },
  };
};