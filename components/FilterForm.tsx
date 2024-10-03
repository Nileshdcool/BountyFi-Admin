// components/FilterForm.tsx
import React from 'react';
import { useFilterContext } from '@/contexts/FilterContext';

interface FilterFormProps {
  fetchPage: (page: number) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ fetchPage }) => {
  const { formValues, setFormValues } = useFilterContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    fetchPage(1);
  };

  return (
    <div className="mb-4 grid-filter">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-900">Report ID</label>
          <input
            type="text"
            name="reportId"
            value={formValues.reportId || ''}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900">Hacker</label>
          <input
            type="text"
            name="hacker"
            value={formValues.hacker || ''}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900">Severity</label>
          <select
            name="severity"
            value={formValues.severity || ''}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900">Report Type</label>
          <select
            name="reportType"
            value={formValues.reportType || ''}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Report Type</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="improvement">Improvement</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;