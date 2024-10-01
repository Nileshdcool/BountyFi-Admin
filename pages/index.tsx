// pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Reports</h2>
      <div className="mb-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Report ID</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hacker</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Severity</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
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
            <tr>
              <td className="py-2 px-4 border-b text-center">1</td>
              <td className="py-2 px-4 border-b text-center">Project A</td>
              <td className="py-2 px-4 border-b text-center">Hacker X</td>
              <td className="py-2 px-4 border-b text-center">Bug</td>
              <td className="py-2 px-4 border-b text-center">High</td>
              <td className="py-2 px-4 border-b text-center">Open</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">2</td>
              <td className="py-2 px-4 border-b text-center">Project B</td>
              <td className="py-2 px-4 border-b text-center">Hacker Y</td>
              <td className="py-2 px-4 border-b text-center">Feature</td>
              <td className="py-2 px-4 border-b text-center">Medium</td>
              <td className="py-2 px-4 border-b text-center">Closed</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}