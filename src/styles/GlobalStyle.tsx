import { themeCss, themeVar } from '@/lib/theme';
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];
export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

export default function GlobalStyle() {
  return (
    <>
      <style global jsx>
        {`
          body,
          body[data-mode='light'] {
            ${themeCss.light};
            transition: 0.125s all ease-in;
            background: ${themeVar.background};
            color: ${themeVar.on_background};
          }
          @media (prefers-color-scheme: dark) {
            body {
              ${themeCss.dark};
            }
          }
          body[data-mode='dark'] {
            ${themeCss.dark};
          }
        `}
      </style>
    </>
  );
}
