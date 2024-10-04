import { FILTER_CONTEXT_ERROR } from '@/constants/messages';
import React, { createContext, useContext, useState } from 'react';

interface FilterContextProps {
  activeButton: string;
  setActiveButton: (buttonName: string) => void;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
  formValues: any;
  setFormValues: (values: any) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [activeButton, setActiveButton] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [pageSize, setPageSize] = useState<number>(5);

  return (
    <FilterContext.Provider
      value={{
        activeButton,
        setActiveButton,
        page,
        setPage,
        totalPages,
        setTotalPages,
        formValues,
        setFormValues,
        pageSize, 
        setPageSize
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(FILTER_CONTEXT_ERROR);
  }
  return context;
};