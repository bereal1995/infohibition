import Button from 'src/components-shared/buttons';
import { useTheme } from '@/providers/ThemeProvider';

import Dark from '@/img/dark.svg';
import Light from '@/img/light.svg';
import styled from '@emotion/styled';

interface Props {}

function ThemeButton({}: Props) {
  const { theme, setThemeMode } = useTheme();

  const onClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
  };

  return (
    <StyledButton onClick={onClick} id="ih-theme-button">
      {theme === 'dark' ? <Dark /> : <Light />}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  /* svg {
    width: 24px;
    height: 24px;
  } */
`;

export default ThemeButton;
