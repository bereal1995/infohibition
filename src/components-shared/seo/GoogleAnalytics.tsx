import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    if (!GA_TRACKING_ID || router.isPreview) return;
    gtag('config', GA_TRACKING_ID, {
      send_page_view: false,
    });
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: GA_TRACKING_ID,
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!GA_TRACKING_ID || router.isPreview) return;
      gtag('event', 'page_view', {
        page_path: url,
        send_to: GA_TRACKING_ID,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, router.isPreview]);

  if (
    !GA_TRACKING_ID ||
    process.env.NODE_ENV !== 'production' ||
    router.isPreview
  ) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      {/* 👇 gtag function definition. notice that we don't send page views at this point.  */}
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
