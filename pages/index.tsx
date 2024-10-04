import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Report } from '../types/report';
import ButtonGroup from '@/components/ButtonGroup';
import FilterForm from '@/components/FilterForm';
import ReportList from '@/components/ReportList';
import { useFilterContext } from '@/contexts/FilterContext';
import { IFilter } from '@/types/filter';
import { getReportsData } from '@/services/report.service';
import { PageValues } from '@/constants/values';

interface Props {
  initialData: Report[];
  meta: any;
}

const Home = ({ initialData, meta }: Props) => {
  const [data, setData] = useState<Report[]>(initialData);
  const { activeButton, setPage, setTotalPages, formValues, pageSize } = useFilterContext();
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPage(meta.page);
    setTotalPages(meta.totalPages);
  }, [meta.page, meta.totalPages, setPage, setTotalPages]);

  useEffect(() => {
    fetchPage(1);
  }, [activeButton, formValues, pageSize]);

  const fetchPage = async (page: number) => {
    setLoading(true);
    const filter: IFilter = { ...formValues, page, limit: pageSize, status: activeButton === 'All' ? undefined : activeButton };
    const { data } = await getReportsData(filter) || { data: { reports: [], meta: { page: 1, totalPages: 1 } } };
    setData(data.reports);
    setPage(data.meta.page);
    setTotalPages(data.meta.totalPages);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-left text-2xl font-bold mb-4">{PageValues.REPORT}</h2>
        <ButtonGroup/>
        <FilterForm />
        <ReportList data={data} fetchPage={fetchPage}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page = 1, limit = 5 } = query;
  const filter: IFilter = { page: Number(page), limit: Number(limit) };
  const response = await getReportsData(filter);
  const { data } = response || { data: { reports: [], meta: { page: 1, totalPages: 1 } } };
  return {
    props: {
      initialData: data.reports,
      meta: data.meta,
    },
  };
};

export default Home;
