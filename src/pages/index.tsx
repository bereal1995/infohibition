import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import HomeContainer from 'src/components-pages/home';
import BasicLayout from 'src/components-shared/layouts/BasicLayout';
import { getItems } from '@/api/items';

export default function Home() {
  const { data } = useQuery(['items'], () => getItems());

  return (
    <BasicLayout>
      <HomeContainer data={data} />
    </BasicLayout>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['items'], () => getItems());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
