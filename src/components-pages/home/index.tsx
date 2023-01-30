import styled from '@emotion/styled';

import Spinner from '@/components-shared/system/Spinner';
import { useInfiniteItems } from '@/components-pages/home/hooks/useItems';
import { useIntersect } from '@/hooks/useIntersect';
import CardList from '@/components-shared/card/CardList';
import { PerforItem } from '@/types/items';
import ListFilter from '@/components-pages/home/ListFilter';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';

function HomeContainer() {
  const { type, realmCode, to, sortStdr } = useFilterQuery();
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteItems(type, {
    realmCode,
    to,
    sortStdr,
  });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isFetchingNextPage) {
      await fetchNextPage();
    }
  });

  const listData: PerforItem[] = data?.pages?.reduce(
    (acc, page) => [...acc, ...(page?.perforList ?? [])],
    []
  );
  const { totalCount } = data?.pages.at(0) ?? {};
  const isLastPage = Number(totalCount?.[0] ?? 0) === listData?.length ?? 0;

  return (
    <Container>
      <ListFilter />
      {listData ? <CardList items={listData} /> : <Spinner />}
      {!isLastPage && <div ref={ref} className="h-px" />}
      {isFetchingNextPage && (
        <div className="relative h-[24px]">
          <Spinner />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
`;

export default HomeContainer;
