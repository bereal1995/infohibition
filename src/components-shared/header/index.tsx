import styled from '@emotion/styled';

import Logo from '@/img/logo.svg';
import { themeVar } from '@/utils/theme';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
}

// TODO: 스크롤할때 고정 필요
function Header({
  title = <Logo />,
  headerLeft,
  headerRight,
  className,
}: Props) {
  return (
    <StyledHeader className={className}>
      {headerLeft && <HeaderSide position="left">{headerLeft}</HeaderSide>}
      <Title className="ih-title">{title}</Title>
      {headerRight && <HeaderSide position="right">{headerRight}</HeaderSide>}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 16px;
  /* border-bottom: 1px solid ${themeVar.highlight}; */
  background: ${themeVar.header_bg};
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  svg {
    display: block;
    width: 27px;
    height: 21px;
  }
`;

const HeaderSide = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${(props) => props.position}: 16px;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;
`;

export default Header;
