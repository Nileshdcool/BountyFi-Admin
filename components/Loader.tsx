// components/Loader.tsx
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Loader;