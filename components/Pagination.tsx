import { useFilterContext } from '@/contexts/FilterContext';
import React from 'react';

interface PaginationProps {
    fetchPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ fetchPage}) => {

    const { page, totalPages, pageSize, setPageSize  } = useFilterContext();

    return (
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
            <div className="flex items-center">
                <label htmlFor="pageSize" className="mr-2 text-sm font-bold text-gray-900">Page Size:</label>
                <select
                    id="pageSize"
                    name="pageSize"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="mt-1 block p-2 border border-gray-300 rounded-md"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
}

export default Pagination;