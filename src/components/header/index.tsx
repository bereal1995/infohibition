import Logo from '@/img/logo.svg';
import ThemeButton from '@/components/buttons/ThemeButton';
import styled from '@emotion/styled';
import { themeVar } from '@/lib/theme';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <StyledLogo />
      <ThemeButton />
    </header>
  );
}

const StyledLogo = styled(Logo)`
  color: ${themeVar.on_background};
`;

export default Header;
