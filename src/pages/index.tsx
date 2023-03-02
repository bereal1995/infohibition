import TabLayout from '@/components-shared/layouts';
import HomeContainer from '@/components-pages/home';
import ThemeButton from '@/components-shared/buttons/ThemeButton';
import SearchButton from '@/components-shared/buttons/SearchButton';
import AsyncBoundaryWithQuery from '@/components-shared/error/AsyncBoundaryWithQuery';

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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const queryClient = new QueryClient();
//   const { month = '1', realmCode, sortStdr = '1', from, to } = ctx.query;

//   const params = removeEmptyValue<FilterQueries>({
//     month,
//     realmCode,
//     sortStdr,
//     from,
//     to,
//   });
//   const type: PerformanceType = realmCode ? 'realm' : 'period';

//   console.log('queryClient', queryClient.getQueryData(['items', type, params]));

//   await queryClient.prefetchInfiniteQuery(
//     ['items', type, params],
//     () => getItems(type, params),
//     {
//       cacheTime: 1000 * 60 * 60,
//       staleTime: 1000 * 60 * 60,
//     }
//   );

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };
