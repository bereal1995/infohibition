import styled from '@emotion/styled';

import {
  searchTextSelector,
  useSearchStore,
} from '@/components-pages/search/states';
import { useIntersect } from '@/hooks/useIntersect';
import { PerforItem } from '@/types/items';
import CardList from '@/components-shared/card/CardList';
import Spinner from '@/components-shared/system/Spinner';
import { useInfiniteSearchItems } from '@/components-pages/search/hooks/useItems';

function SearchContainer() {
  const searchText = useSearchStore(searchTextSelector);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteSearchItems(searchText);
  const isEmpty = !searchText;

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isFetchingNextPage) {
      await fetchNextPage();
    }
  });

  const listData: PerforItem[] = isEmpty
    ? []
    : data?.pages.reduce((acc, { perforList }) => {
        if (!Array.isArray(perforList)) {
          return [...acc, perforList];
        }
        return [...acc, ...perforList];
      }, []);

  return (
    <Container>
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
  padding: 16px;
`;

export default SearchContainer;
