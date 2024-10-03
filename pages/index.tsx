import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Report } from '../types/report';
import axiosInstance from '@/services/axiosInstance.service';
import ButtonGroup from '@/components/ButtonGroup';
import FilterForm from '@/components/FilterForm';
import ReportList from '@/components/ReportList';
import { useFilterContext } from '@/contexts/FilterContext';
import { IFilter } from '@/types/filter';
interface Props {
  initialData: Report[];
  meta: any;
}

export default function Home({ initialData, meta }: Props) {

  const [data, setData] = useState<Report[]>(initialData);

  const {
    activeButton,
    setActiveButton,
    page,
    setPage,
    totalPages,
    setTotalPages,
    formValues,
  } = useFilterContext();

  useEffect(() => {
    setPage(meta.page);
    setTotalPages(meta.totalPages);
  }, [])

  const fetchPage = async (page: number) => {
    const filter:IFilter = {...formValues, page, limit: 10, status:activeButton};
   
    const res = await axiosInstance.get(`/api/reports`, {
      params: filter,
    });
    const data = res.data;
    setData(data.reports);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    fetchPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-left text-2xl font-bold mb-4">Reports</h2>
      <ButtonGroup activeButton={activeButton} handleButtonClick={handleButtonClick} />
      <FilterForm fetchPage={fetchPage} />
      <ReportList data={data} fetchPage={fetchPage} page={page} totalPages={totalPages} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, limit = 10 } = context.query;
  const filter: IFilter = { page: Number(page), limit: Number(limit)};
  const res = await axiosInstance.get(`api/reports`, {
    params: filter
  });
  const data: any = res.data;
  return {
    props: {
      initialData: data.reports,
      meta: data.meta,
    },
  };
};