import { GetServerSideProps } from 'next';

import DetailContainer from '@/components-pages/detail';
import DetailLayout from '@/components-shared/layouts/DetailLayout';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getItem } from '@/api/items';

export default function DetailPage() {
  return (
    <DetailLayout hasBackButton>
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
