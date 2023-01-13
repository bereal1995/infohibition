import useMedia from '@/hooks/useMedia';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ThemeContext = React.createContext({
  theme: 'system',
  setThemeMode: (_: string) => {},
});

export const MEDIA = '(prefers-color-scheme: dark)';
export const THEME_STORAGE_KEY = 'ih_theme';

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState('system');
  const prefersDarkMode = useMedia(MEDIA);
  const isInitRender = useRef(true);

  const setTheme = (theme: string) => {
    setThemeState(theme);
    document.body.setAttribute('data-mode', theme);
  };

  const setThemeMode = (theme: string) => {
    setTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const osTheme = prefersDarkMode ? 'dark' : 'light';

    if (isInitRender.current) {
      setTheme(localTheme || osTheme);
      isInitRender.current = false;
    } else if (!localTheme) {
      setTheme(osTheme);
    }
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
