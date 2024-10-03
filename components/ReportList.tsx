import React from 'react';
import { Report } from '../types/report';
import { getFormattedDate } from '@/utils/date.service';
import Pagination from './Pagination';

interface ReportListProps {
    data: Report[];
    fetchPage: any;
    page: any;
    totalPages: any;
    pageSize: any;
    setPageSize: any
}


const ReportList: React.FC<ReportListProps> = ({ data, fetchPage, page, totalPages, pageSize, setPageSize }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-center">Id</th>
                <th className="py-2 px-4 border-b text-center">Project</th>
                <th className="py-2 px-4 border-b text-center">Hacker</th>
                <th className="py-2 px-4 border-b text-center">Type</th>
                <th className="py-2 px-4 border-b text-center">Severity</th>
                <th className="py-2 px-4 border-b text-center">Status</th>
                <th className="py-2 px-4 border-b text-center">Submission</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-center">{item.id}</td>
                    <td className="py-2 px-4 border-b text-center">{item.project.name}</td>
                    <td className="py-2 px-4 border-b text-center">{item.user.email}</td>
                    <td className="py-2 px-4 border-b text-center">{item.type}</td>
                    <td className="py-2 px-4 border-b text-center">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold text-white ${item.severity.toLowerCase() === 'low' ? 'bg-green-500' : item.severity.toLowerCase() === 'medium' ? 'bg-yellow-500' : item.severity.toLowerCase() === 'high' ? 'bg-orange-500' : 'bg-red-500'} rounded-full`}>
                        {item.severity}
                    </span>
                    </td>
                    <td className="py-2 px-4 border-b text-center">{item.status}</td>
                    <td className="py-2 px-4 border-b text-center">{getFormattedDate(new Date(item.createdAt))}</td>
                </tr>
                ))}
            </tbody>
            </table>
            <Pagination fetchPage={fetchPage} page={page} totalPages={totalPages} pageSize={pageSize} setPageSize={setPageSize}  />
        </div>
    );
};

export default ReportList;