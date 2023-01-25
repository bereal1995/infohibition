import { GetServerSideProps } from 'next';

import DetailContainer from '@/components-pages/detail';
import DetailLayout from '@/components-shared/layouts/DetailLayout';

interface Props {
  seq: string;
}

export default function DetailPage({ seq }: Props) {
  console.log('seq', seq);

  return (
    <DetailLayout hasBackButton>
      <DetailContainer />
    </DetailLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { seq } = ctx.query;
  return {
    props: { seq },
  };
};
