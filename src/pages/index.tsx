import xml2js from 'xml2js';

import { getPerformanceDisplay } from '@/api/performance';
import HomeContainer from '@/components/home';
import BasicLayout from '@/components/layouts/BasicLayout';
import { PerformanceDisplay } from '@/types/perfor';

interface Props {
  performanceData: PerformanceDisplay;
}

export default function Home({ performanceData }: Props) {
  return (
    <BasicLayout>
      <HomeContainer data={performanceData} />
    </BasicLayout>
  );
}

export const getServerSideProps = async () => {
  const xmlData = await getPerformanceDisplay();
  let data;
  xml2js.parseString(xmlData, (err, result) => {
    data = result?.response?.msgBody[0] as PerformanceDisplay;
  });

  return {
    props: {
      performanceData: data,
    },
  };
};
