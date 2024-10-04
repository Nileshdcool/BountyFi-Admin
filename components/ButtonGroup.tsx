import { useFilterContext } from '@/contexts/FilterContext';
import { ReportStatus } from '@/enums/report-status.enum';
import React from 'react';

const ButtonGroup: React.FC = () => {
    const { activeButton, setActiveButton } = useFilterContext();
    const buttons = ['All',...Object.values(ReportStatus)];
    return (
        <div className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
            <div className="flex space-x-2">
                {buttons.map((buttonName) => (
                    <button
                        key={buttonName}
                        className={`px-4 py-2 rounded ${activeButton === buttonName ? 'bg-blue-700' : 'bg-blue-500'} text-white hover:bg-blue-600`}
                        onClick={() => setActiveButton(buttonName)}
                    >
                        {buttonName.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonGroup;