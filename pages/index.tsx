import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';

interface Report {
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
}

interface Props {
  initialData: Report[];
  meta: any;
}

export default function Home({ initialData, meta }: Props) {
  const [activeButton, setActiveButton] = useState('All');
  const [data, setData] = useState<Report[]>(initialData);

  const [page, setPage] = useState(meta.page);
  const [totalPages, setTotalPages] = useState(meta.totalPages);

  const fetchPage = async (page: number) => {
    const res = await fetch(`/api/reports?page=${page}&limit=10`);
    const data = await res.json();
    setData(data.reports);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-left text-2xl font-bold mb-4">Reports</h2>

      <div className="mb-4 flex space-x-2">
        {['All', 'Reported', 'Escalated', 'Confirmed', 'Paid', 'Closed'].map((buttonName) => (
          <button
            key={buttonName}
            className={`px-4 py-2 rounded ${activeButton === buttonName ? 'bg-blue-700' : 'bg-blue-500'
              } text-white hover:bg-blue-600`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>

      <div className="mb-4 grid-filter">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-900">Report ID</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900">Hacker</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900">Severity</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select Severity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900">Report Type</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select Report Type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="improvement">Improvement</option>
            </select>
          </div>
        </div>
      </div>
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
        <div className="pagination flex justify-center items-center mt-4 space-x-4">
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, limit = 10 } = context.query;
  const res = await fetch(`http://localhost:3000/api/reports?page=${page}&limit=${limit}`);
  const data: any = await res.json();

  return {
    props: {
      initialData: data.reports,
      meta: data.meta,
    },
  };
};