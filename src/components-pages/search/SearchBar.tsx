import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { themeVar } from '@/utils/theme';
import SearchIcon from '@/img/search.svg';
import { asPathToObjectQuery } from '@/utils/api';
import { useSearchBarState } from '@/components-pages/search/hooks/useSearchBarState';

function SearchBar() {
  const { asPath } = useRouter();
  const { q } = asPathToObjectQuery<{ q: string }>(asPath);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText(q ?? '');
  }, [q]);

  useSearchBarState(searchText);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <SearchInput type="text" value={searchText} onChange={handleChangeText} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 32px;
  padding-right: 12px;
  border-radius: 5px;
  background: ${themeVar.background};
  font-size: 14px;
  font-weight: normal;
`;

const SearchIconWrap = styled.div`
  position: absolute;
  left: 10px;
  svg {
    width: 16px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
`;

export default SearchBar;
