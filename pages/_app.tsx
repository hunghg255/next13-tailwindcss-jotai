import '../styles/tailwind.css';
import '../styles/globals.scss';

import type { ReactElement, ReactNode } from 'react';

import { Waterfall } from '@next/font/google';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import ErrorBoundary from '@components/ErrorBoundary';
import AppLayout from '@layout/AppLayout';

import nextI18nConfig from '../next-i18next.config';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const WaterfallFont = Waterfall({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-waterfall',
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Maby Client' />
        <meta name='description' content='Maby Client' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no'
        />
      </Head>

      <ErrorBoundary>
        <AppLayout WaterfallFont={WaterfallFont}>
          {getLayout(<Component {...pageProps} />)}
        </AppLayout>
      </ErrorBoundary>
    </>
  );
}

// @ts-ignore
export default appWithTranslation(MyApp, nextI18nConfig);
