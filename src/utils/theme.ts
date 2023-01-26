interface ThemeColors {
  primary: string;
  primary_variant: string;
  secondary: string;
  secondary_variant: string;
  background: string;
  background_elevated: string;
  surface: string;
  surface_elevated: string;
  error: string;
  on_primary: string;
  on_secondary: string;
  on_background: string;
  on_background_elevated: string;
  on_surface: string;
  on_surface_elevated: string;
  on_error: string;
}

type ThemeColorsKey = keyof ThemeColors;

const colors: ThemeColors = {
  primary: '#6200EE',
  primary_variant: '#3700B3',
  secondary: '#03DAC6',
  secondary_variant: '#018786',
  background: '#F5F5F5',
  background_elevated: '#F5F5F5',
  surface: '#FFFFFF',
  surface_elevated: '#F5F5F5',
  error: '#B00020',
  on_primary: '#FFFFFF',
  on_secondary: '#000000',
  on_background: '#000000',
  on_background_elevated: '#e5e5e5',
  on_surface: '#000000',
  on_surface_elevated: '#757575',
  on_error: '#FFFFFF',
};

const darkColors: ThemeColors = {
  primary: '#BB86FC',
  primary_variant: '#3700B3',
  secondary: '#03DAC6',
  secondary_variant: '#03DAC6',
  background: '#121212',
  background_elevated: '#121212',
  surface: '#121212',
  surface_elevated: '#121212',
  error: '#CF6679',
  on_primary: '#000000',
  on_secondary: '#000000',
  on_background: '#FFFFFF',
  on_background_elevated: '#5e5e5e',
  on_surface: '#FFFFFF',
  on_surface_elevated: '#b1b1b1',
  on_error: '#000000',
};

function themeToCss(themeSet: ThemeColors) {
  const css = Object.entries(themeSet).reduce((acc, [key, value]) => {
    return `${acc} --ih-${key.replace(/_/g, '-')}: ${value};`;
  }, '');
  return css;
}

export const themeCss = {
  light: themeToCss(colors),
  dark: themeToCss(darkColors),
};

const colorsKeys = Object.keys(colors) as ThemeColorsKey[];
export const themeVar = colorsKeys.reduce((acc, key) => {
  acc[key] = `var(--ih-${key.replace(/_/g, '-')})`;
  return acc;
}, {} as Record<keyof ThemeColors, string>);
