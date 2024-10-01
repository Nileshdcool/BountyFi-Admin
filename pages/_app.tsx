// pages/_app.tsx
import Layout from '@/components/_Layout';
import '../styles/globals.css';


import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;