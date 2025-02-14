import { unescapeHtml } from '@/utils/string';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export const IH_URL = process.env.NEXT_PUBLIC_URL;

function HeadMeta({
  title = '국내 공연 일정 & 예매 | 콘서트, 뮤지컬, 연극 정보 - IH',
  description = '국내 인기 콘서트, 뮤지컬, 연극 공연 정보를 한눈에 확인하세요. 실시간 공연 일정, 예매 링크 제공.',
  image = `${IH_URL}/og-image.png`,
  url = IH_URL,
  type = 'website',
  keywords = '공연 정보, 콘서트 일정, 뮤지컬 예매, 연극 추천',
}: Props) {
  title = `IH | ${unescapeHtml(title)}`;
  description = unescapeHtml(description);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@site_account" />
      <meta name="twitter:creator" content="@individual_account" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="naver-site-verification"
        content="fd6b2d720726892af5c703e64e36ddb8b74f12b3"
      />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}

export default HeadMeta;
