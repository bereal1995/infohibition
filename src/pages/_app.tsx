import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';

import '@/styles/globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${notoSansKr.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
