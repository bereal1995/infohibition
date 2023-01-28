import type { AppProps } from 'next/app';
import { Noto_Sans_KR, Roboto } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});
// TODO: 한글은 noto sans kr, 영어는 roboto로 설정

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily},
              ${notoSansKr.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
