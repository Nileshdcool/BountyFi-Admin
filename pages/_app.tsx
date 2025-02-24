import Layout from '@/components/_Layout';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { FilterProvider } from '@/contexts/FilterContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '@/components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
    <Layout>
      <FilterProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </FilterProvider>
    </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;