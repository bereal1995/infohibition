import styled from '@emotion/styled';

import {
  searchTextSelector,
  useSearchStore,
} from '@/components-pages/search/states';

function SearchContainer() {
  const searchText = useSearchStore(searchTextSelector);

  return (
    <>
      <Container>검색어: {searchText}</Container>
    </>
  );
}

const Container = styled.div``;

export default SearchContainer;
