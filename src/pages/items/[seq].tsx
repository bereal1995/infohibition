import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import DetailContainer from '@/components-pages/detail';
import DetailLayout from '@/components-shared/layouts/DetailLayout';
import { getItem } from '@/api/items';
import ThemeButton from '@/components-shared/buttons/ThemeButton';

export default function DetailPage() {
  return (
    <DetailLayout hasBackButton headerRight={<ThemeButton />}>
      <DetailContainer />
    </DetailLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();

  const { seq } = ctx.query;
  await queryClient.prefetchInfiniteQuery(['item', seq], () =>
    getItem(seq as string)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
