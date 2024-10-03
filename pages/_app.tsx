// pages/_app.tsx
import Layout from '@/components/_Layout';
import '../styles/globals.css';


import { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </Layout>
  );
}

export default MyApp;