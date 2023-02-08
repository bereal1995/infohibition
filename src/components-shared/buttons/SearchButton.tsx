import { useRouter } from 'next/router';

import Button from '@/components-shared/buttons';
import SearchIcon from '@/img/search.svg';
import styled from '@emotion/styled';

function SearchButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/search');
  };

  return (
    <StyledButton onClick={handleClick}>
      <SearchIcon />
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  svg {
    width: 21px;
    height: 21px;
  }
`;

export default SearchButton;
