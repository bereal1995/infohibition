import { MEDIA, STORAGE_KEY } from '@/providers/ThemeProvider';
import { Html, Head, Main, NextScript } from 'next/document';

const createMarkup = (htmlValue: string) => {
  return { __html: htmlValue };
};

const ThemeScript = () => {
  const setTheme = `
    const prefersDarkMode = window.matchMedia("${MEDIA}").matches;
    const localTheme = localStorage.getItem("${STORAGE_KEY}");
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
      <Head />
      <body>
        <ThemeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
