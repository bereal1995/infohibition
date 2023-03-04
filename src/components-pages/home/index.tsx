import styled from '@emotion/styled';

import Spinner from '@/components-shared/system/Spinner';
import { useInfiniteItems } from '@/components-pages/home/hooks/useItems';
import { useIntersect } from '@/hooks/useIntersect';
import CardList from '@/components-shared/card/CardList';
import { PerforItem } from '@/types/items';
import ListFilter from '@/components-pages/home/Filter';
import {
  FilterQueries,
  useFilterQuery,
} from '@/components-pages/home/hooks/useFilterQuery';
import { removeEmptyValue } from '@/utils/api';

function HomeContainer() {
  const { queries, type } = useFilterQuery();
  const params = removeEmptyValue<FilterQueries>(queries);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteItems(type, params);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isFetchingNextPage) {
      await fetchNextPage();
    }
  });

  const listData: PerforItem[] = data?.pages.reduce((acc, { perforList }) => {
    if (!Array.isArray(perforList)) {
      return [...acc, perforList];
    }
    return [...acc, ...perforList];
  }, []);

  return (
    <Container>
      <ListFilter />
      <CardList items={listData} />
      {hasNextPage && <div ref={ref} className="h-px" />}
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
