import React from 'react';

interface ButtonGroupProps {
  activeButton: string;
  handleButtonClick: (buttonName: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ activeButton, handleButtonClick }) => {
  const buttons = ['All', 'Reported', 'Escalated', 'Confirmed', 'Paid', 'Closed'];
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex space-x-2">
        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            className={`px-4 py-2 rounded ${activeButton === buttonName ? 'bg-blue-700' : 'bg-blue-500'} text-white hover:bg-blue-600`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;