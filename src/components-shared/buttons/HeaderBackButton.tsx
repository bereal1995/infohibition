import styled from '@emotion/styled';

import BackIcon from '@/img/back_icon.svg';

interface Props {
  onClick?: () => void;
}

function HeaderBackButton({ onClick }: Props) {
  return (
    <IconButton onClick={onClick}>
      <BackIcon />
    </IconButton>
  );
}

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: -8px;
  border: none;
  background: none;
  /* svg {
    width: 24px;
    height: 24px;
  } */
`;

export default HeaderBackButton;
