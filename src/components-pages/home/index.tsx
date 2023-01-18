import CardList from 'src/components-shared/card/CardList';
import { PerformanceDisplay } from '@/types/items';
import styled from '@emotion/styled';
import { useIntersect } from '@/hooks/useIntersect';
import { useInfiniteItems } from 'src/components-pages/home/hooks/useItems';

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
      <CardList items={listData} />
      <div ref={ref} className="h-px" />
      {isFetchingNextPage && <div>계속 불러오는 중</div>}
    </Container>
  );
}

const Container = styled.div``;

export default HomeContainer;
