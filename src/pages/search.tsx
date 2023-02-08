import styled from '@emotion/styled';

import SearchContainer from '@/components-pages/search';
import SearchBar from '@/components-pages/search/SearchBar';
import DetailLayout from '@/components-shared/layouts/DetailLayout';

export default function Search() {
  return (
    <StyledLayout hasBackButton title={<SearchBar />}>
      <SearchContainer />
    </StyledLayout>
  );
}

const StyledLayout = styled(DetailLayout)`
  .ih-title {
    width: 100%;
    margin-left: 32px;
  }
`;
