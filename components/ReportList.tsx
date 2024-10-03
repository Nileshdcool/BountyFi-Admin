import React from 'react';
import { Report } from '../types/report';

interface ReportListProps {
    data: Report[];
    fetchPage: any;
    page: any;
    totalPages: any;
}


const ReportList: React.FC<ReportListProps> = ({ data, fetchPage, page, totalPages }) => {
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
                </tr>
                ))}
            </tbody>
            </table>
            <div className="pagination flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <button
                onClick={() => fetchPage(page - 1)}
                disabled={page <= 1}
                className={`px-4 py-2 rounded ${page <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
                Previous
            </button>
            <span className="text-lg font-semibold">
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => fetchPage(page + 1)}
                disabled={page >= totalPages}
                className={`px-4 py-2 rounded ${page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
                Next
            </button>
            </div>
        </div>
    );
};

export default ReportList;