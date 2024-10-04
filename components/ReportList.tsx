import React from 'react';
import { Report } from '../types/report';
import { getFormattedDate } from '@/utils/date.service';
import Pagination from './Pagination';
import { TableHeaders } from '@/constants/values';

interface ReportListProps {
    data: Report[];
    fetchPage: any
}

const THead = () => { 
    return (
        <thead>
                <tr className="bg-gray-100">
                    {TableHeaders.map((header:string) => (
                        <th key={header} className="py-2 px-4 border-b text-center">{header}</th>
                    ))}
                </tr>
            </thead>
    );
}

const TBody: React.FC<{ data: Report[] }> = ({ data }) => {
    return (
        <tbody>
                {data.map((item: Report) => (
                <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-center">#{item.id}</td>
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
    )
}


const ReportList: React.FC<ReportListProps> = ({ data, fetchPage}) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
            <THead />
            <TBody data={data} />
            </table>
            <div className="my-4">
            <Pagination fetchPage={fetchPage} />
            </div>
        </div>
    );
};

export default ReportList;