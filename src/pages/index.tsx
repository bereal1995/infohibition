import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import TabLayout from '@/components-shared/layouts';
import HomeContainer from '@/components-pages/home';
import ThemeButton from '@/components-shared/buttons/ThemeButton';
import SearchButton from '@/components-shared/buttons/SearchButton';
import AsyncBoundaryWithQuery from '@/components-shared/error/AsyncBoundaryWithQuery';
import { getItems } from '@/api/items';
import { removeEmptyValue } from '@/utils/api';
import { FilterQueries } from '@/components-pages/home/hooks/useFilterQuery';
import { PerformanceType } from '@/types/items';

export default function Home() {
  return (
    <TabLayout
      headerRight={
        <>
          <ThemeButton />
          <SearchButton />
        </>
      }
    >
      <AsyncBoundaryWithQuery>
        <HomeContainer />
      </AsyncBoundaryWithQuery>
    </TabLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const { month = '1', realmCode, sortStdr = '1', from, to } = ctx.query;

  const params = removeEmptyValue<FilterQueries>({
    month,
    realmCode,
    sortStdr,
    from,
    to,
  });
  const type: PerformanceType = realmCode ? 'realm' : 'period';

  await queryClient.prefetchInfiniteQuery(['items', type, params], () =>
    getItems(type, params)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
