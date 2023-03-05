// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 0.2,
  ignoreErrors: ['NotFoundError', 'ResizeObserver loop limit exceeded'],
  beforeSend: (event, hint) => {
    if (hint.originalException instanceof NotFoundError) {
      return null;
    }

    return event;
  },
  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb?.category === 'console') {
      return null;
    }
    return breadcrumb;
  },
});
