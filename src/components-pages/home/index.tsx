import styled from '@emotion/styled';

import { PerformanceDisplay } from '@/types/items';
import Spinner from '@/components-shared/system/Spinner';
import { useInfiniteItems } from '@/components-pages/home/hooks/useItems';
import { useIntersect } from '@/hooks/useIntersect';
import CardList from '@/components-shared/card/CardList';

interface Props {
  data: PerformanceDisplay;
}

function HomeContainer() {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteItems();

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isFetchingNextPage) {
      await fetchNextPage();
    }
  });

  const listData = data?.pages?.reduce(
    (acc, page) => [...acc, ...page.perforList],
    [] as PerformanceDisplay[]
  );

  return (
    <Container>
      {listData ? <CardList items={listData} /> : <Spinner />}
      <div ref={ref} className="h-px" />
      {isFetchingNextPage && <Spinner />}
    </Container>
  );
}

const Container = styled.div``;

export default HomeContainer;
