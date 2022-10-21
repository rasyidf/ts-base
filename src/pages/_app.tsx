import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from "@mantine/core";
import { cache } from '../utils/cache';
import AxiosProvider from '../lib/axios/AxiosProvider';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={cache}
        >
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </QueryClientProvider>
    </AxiosProvider>
  );
}

export default MyApp;
