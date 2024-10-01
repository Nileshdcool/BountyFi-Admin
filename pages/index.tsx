import React, { useState } from 'react';

export default function Home() {
  const [activeButton, setActiveButton] = useState('All');

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
            className={`px-4 py-2 rounded ${
              activeButton === buttonName ? 'bg-blue-700' : 'bg-blue-500'
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
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">1</td>
              <td className="py-2 px-4 border-b text-center">Project A</td>
              <td className="py-2 px-4 border-b text-center">Hacker X</td>
              <td className="py-2 px-4 border-b text-center">Bug</td>
              <td className="py-2 px-4 border-b text-center">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">High</span>
              </td>
              <td className="py-2 px-4 border-b text-center">Open</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">2</td>
              <td className="py-2 px-4 border-b text-center">Project B</td>
              <td className="py-2 px-4 border-b text-center">Hacker Y</td>
              <td className="py-2 px-4 border-b text-center">Feature</td>
              <td className="py-2 px-4 border-b text-center">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">Medium</span>
              </td>
              <td className="py-2 px-4 border-b text-center">Closed</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">3</td>
              <td className="py-2 px-4 border-b text-center">Project C</td>
              <td className="py-2 px-4 border-b text-center">Hacker Z</td>
              <td className="py-2 px-4 border-b text-center">Feature</td>
              <td className="py-2 px-4 border-b text-center">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-700 rounded-full">Critical</span>
              </td>
              <td className="py-2 px-4 border-b text-center">Closed</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}