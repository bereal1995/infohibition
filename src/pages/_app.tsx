import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from '@next/font/google';

import '@/styles/globals.css';

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
      <Component {...pageProps} />
    </>
  );
}
