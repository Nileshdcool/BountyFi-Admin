import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type ReportsResponse = {
  reports: Reports;
  meta: Meta;
};

type ErrorResponse = {
  error: string;
};

type Reports = {
  id: number;
  status: string;
  type: string;
  severity: string;
  title: string;
  createdAt: string;
  project: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    email: string;
  };
}[];

type Meta = {
  page: number;
  totalPages: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReportsResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    res.status(404).json({ error: "Not found" });
    return;
  }

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  const reports = await prisma.report.findMany({
    skip,
    take: limit,
    include: {
      project: true,
      user: true,
    },
  });

  const totalReports = await prisma.report.count();

  const formattedReports: Reports = reports.map((report) => ({
    id: report.id,
    status: report.status,
    type: report.type,
    severity: report.severity,
    title: report.title,
    createdAt: report.createdAt.toISOString(),
    project: {
      id: report.project.id,
      name: report.project.name,
    },
    user: {
      id: report.user.id,
      email: report.user.email,
    },
  }));

  const meta: Meta = {
    page,
    totalPages: Math.ceil(totalReports / limit),
  };

  res.status(200).json({ reports: formattedReports, meta });
}