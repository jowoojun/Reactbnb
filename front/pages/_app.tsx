import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>React Twitter</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
