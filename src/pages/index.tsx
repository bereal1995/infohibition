import { dehydrate, QueryClient } from '@tanstack/react-query';

import { getItems } from '@/api/items';
import TabLayout from '@/components-shared/layouts';
import HomeContainer from '@/components-pages/home';

export default function Home() {
  return (
    <TabLayout>
      <HomeContainer />
    </TabLayout>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['items'], () => getItems());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
