import Button from '@/components/buttons';
import { useTheme } from '@/providers/ThemeProvider';

import Dark from '@/img/dark.svg';
import Light from '@/img/light.svg';

interface Props {}

function ThemeButton({}: Props) {
  const { theme, setThemeMode } = useTheme();

  const onClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
  };

  return (
    <Button onClick={onClick}>{theme === 'dark' ? <Dark /> : <Light />}</Button>
  );
}

export default ThemeButton;
