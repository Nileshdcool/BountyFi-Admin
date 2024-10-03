import Layout from '@/components/_Layout';
import '../styles/globals.css';
import { toast } from 'react-toastify';
import { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FilterProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </FilterProvider>
    </Layout>
  );
}

export default MyApp;