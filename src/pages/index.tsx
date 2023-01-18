import { dehydrate, QueryClient } from '@tanstack/react-query';

import HomeContainer from 'src/components-pages/home';
import BasicLayout from 'src/components-shared/layouts/BasicLayout';
import { getItems } from '@/api/items';

export default function Home() {
  return (
    <BasicLayout>
      <HomeContainer />
    </BasicLayout>
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
