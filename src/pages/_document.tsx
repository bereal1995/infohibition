import { Html, Head, Main, NextScript } from 'next/document';

import Favicon from '@/components-shared/seo/Favicon';
import { MEDIA, THEME_STORAGE_KEY } from '@/providers/ThemeProvider';

export const createMarkup = (htmlValue: string) => {
  return { __html: htmlValue };
};

const ThemeScript = () => {
  const setTheme = `
    const prefersDarkMode = window.matchMedia("${MEDIA}").matches;
    const localTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (localTheme) {
      document.body.setAttribute('data-mode', localTheme);
    } else {
      document.body.setAttribute('data-mode', prefersDarkMode ? 'dark' : 'light');
    }
  `;

  return <script dangerouslySetInnerHTML={createMarkup(setTheme)} />;
};

export default function Document() {
  return (
    <Html>
      <Head>
        <Favicon />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {
          // Google AddSense
          process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1030651127007158"
                crossOrigin="anonymous"
              />
            </>
          )
        }
      </Head>
      <body>
        <ThemeScript />
        <Main />
        <NextScript />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
