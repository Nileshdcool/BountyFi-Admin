import React from 'react';
import { useFilterContext } from '@/contexts/FilterContext';
import { ReportSeverity } from '@/enums/report-severity.enum';
import { ReportType } from '@/enums/report-type.enum';

const FilterForm: React.FC = () => {
  const { formValues, setFormValues } = useFilterContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-4 flex flex-wrap gap-4">
      <div className="flex-1">
        <label className="block text-sm font-bold text-gray-900">Report ID</label>
        <input
          type="number"
          name="reportId"
          value={formValues.reportId || ''}
          onChange={handleChange}
          placeholder="Enter Report ID"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-bold text-gray-900">Hacker</label>
        <input
          type="text"
          name="hacker"
          value={formValues.hacker || ''}
          onChange={handleChange}
          placeholder="Enter Hacker Name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-bold text-gray-900">Severity</label>
        <select
          name="severity"
          value={formValues.severity || ''}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Severity</option>
          {Object.values(ReportSeverity).map((severity) => (
            <option key={severity} value={severity}>
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-bold text-gray-900">Report Type</label>
        <select
          name="reportType"
          value={formValues.reportType || ''}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Report Type</option>
          {Object.values(ReportType).map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-bold text-gray-900">Submission Date</label>
        <div className="relative">
          <input
        type="date"
        name="submissionDate"
        value={formValues.submissionDate || ''}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md pr-10"
          />
          <button
        type="button"
        onClick={() => setFormValues({ ...formValues, submissionDate: '' })}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200 border border-gray-300 rounded-full"
          >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;