import { unescapeHtml } from '@/utils/string';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

function HeadMeta({
  title = 'IH | 국내 공연 정보',
  description = '국내 공연 정보를 한눈에 확인할 수 있는 IH 입니다.',
  image = '',
  url = 'https://www.hhxdragon.com/',
  type = 'website',
}: Props) {
  title = unescapeHtml(title);
  description = unescapeHtml(description);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
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
    </Head>
  );
}

export default HeadMeta;
