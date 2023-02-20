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
import ScrollRemember from '@/components-shared/system/ScrollRemember';
import GlobalBottomSheetModal from '@/components-shared/bottomSheetModal/GlobalBottomSheetModal';
import 'react-datepicker/dist/react-datepicker.css';
import HeadMeta from '@/components-shared/seo/HeadMeta';
import GoogleAnalytics from '@/components-shared/seo/GoogleAnalytics';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60,
            cacheTime: 1000 * 60 * 60,
          },
        },
      })
  );

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
      <HeadMeta />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <GlobalStyle />
            <ScrollRemember />
            <GlobalBottomSheetModal />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
