import { getServerSideSitemapLegacy } from 'next-sitemap';
import { GetServerSideProps } from 'next';

import { removeEmptyValue } from '@/utils/api';
import { FilterQueries } from '@/components-pages/home/hooks/useFilterQuery';
import { PerformanceType } from '@/types/items';
import { getItems } from '@/api/items';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { month = '1', realmCode, sortStdr = '1', from, to } = ctx.query;

  const params = removeEmptyValue<FilterQueries>({
    month,
    realmCode,
    sortStdr,
    from,
    to,
  });
  const type: PerformanceType = realmCode ? 'realm' : 'period';

  const res = await getItems(type, params);

  const fields = res?.perforList?.map((item: any) => ({
    loc: `https://infohibition.bereal95.com/items/${item?.seq}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
