import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '../components/Styles/GlobalStyle';
import NavTab from '../components/NavTab';

import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>React Twitter</title>
    </Head>
    <GlobalStyle />
    <NavTab />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(App);
