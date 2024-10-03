import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Report } from '../types/report';
import ButtonGroup from '@/components/ButtonGroup';
import FilterForm from '@/components/FilterForm';
import ReportList from '@/components/ReportList';
import { useFilterContext } from '@/contexts/FilterContext';
import { IFilter } from '@/types/filter';
import { getReportsData } from '@/services/report.service';

interface Props {
  initialData: Report[];
  meta: any;
}

const Home = ({ initialData, meta }: Props) => {
  const [data, setData] = useState<Report[]>(initialData);
  const { activeButton, setActiveButton, page, setPage, totalPages, setTotalPages, formValues } = useFilterContext();

  useEffect(() => {
    setPage(meta.page);
    setTotalPages(meta.totalPages);
  }, [meta.page, meta.totalPages, setPage, setTotalPages]);

  useEffect(() => {
    fetchPage(1);
  }, [activeButton, formValues]);

  const fetchPage = async (page: number) => {
    const filter: IFilter = { ...formValues, page, limit: 10, status: activeButton === 'All' ? undefined : activeButton };
    const { data } = await getReportsData(filter);
    setData(data.reports);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-left text-2xl font-bold mb-4">Reports</h2>
      <ButtonGroup activeButton={activeButton} handleButtonClick={setActiveButton} />
      <FilterForm />
      <ReportList data={data} fetchPage={fetchPage} page={page} totalPages={totalPages} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page = 1, limit = 10 } = query;
  const filter: IFilter = { page: Number(page), limit: Number(limit) };
  const { data } = await getReportsData(filter);
  return {
    props: {
      initialData: data.reports,
      meta: data.meta,
    },
  };
};

export default Home;
