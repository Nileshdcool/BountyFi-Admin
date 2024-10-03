import React from 'react';
import { useFilterContext } from '@/contexts/FilterContext';
import { ReportSeverity } from '@/enums/report-severity.enum';
import { ReportType } from '@/enums/report-type.enum';

const FilterForm: React.FC = ( ) => {
  const { formValues, setFormValues } = useFilterContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
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
            placeholder="Enter Report ID"
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
            placeholder="Enter Hacker Name"
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
            {Object.values(ReportSeverity).map((severity) => (
              <option key={severity} value={severity}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </option>
            ))}
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
            {Object.values(ReportType).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;