interface ThemeColors {
  primary: string;
  on_primary: string;
  primary_variant: string;
  secondary: string;
  on_secondary: string;
  secondary_variant: string;
  background: string;
  on_background: string;
  background_elevated: string;
  on_background_elevated: string;
  surface: string;
  on_surface: string;
  surface_elevated: string;
  on_surface_elevated: string;
  error: string;
  on_error: string;
  highlight: string;
  outline: string;
  sub_text: string;
  header_bg: string;
}

type ThemeColorsKey = keyof ThemeColors;

const colors: ThemeColors = {
  primary: '#3b80e7',
  on_primary: '#FFFFFF',
  primary_variant: '#97BAEA',
  secondary: '#144955',
  on_secondary: '#FFFFFF',
  secondary_variant: '#A9EDFF',
  background: '#DDDDDD',
  on_background: '#1f1f1f',
  background_elevated: '#F5F5F5',
  on_background_elevated: '#e5e5e5',
  surface: '#F7F8F9',
  on_surface: '#000000',
  surface_elevated: '#EFF1F3',
  on_surface_elevated: '#000000',
  error: '#B00020',
  on_error: '#FFFFFF',
  highlight: '#BCBCBC',
  outline: '#4D4D4D',
  sub_text: '#4D4D4D',
  header_bg: '#F5F5F5',
};

const darkColors: ThemeColors = {
  primary: '#3b80e7',
  on_primary: '#FFFFFF',
  primary_variant: '#1B2E4B',
  secondary: '#539EAF',
  on_secondary: '#FFFFFF',
  secondary_variant: '#004E5D',
  background: '#16181A',
  on_background: '#FFFFFF',
  background_elevated: '#1f1f1f',
  on_background_elevated: '#FFFFFF',
  surface: '#16181A',
  on_surface: '#FFFFFF',
  surface_elevated: '#16181A',
  on_surface_elevated: '#FFFFFF',
  error: '#CF6679',
  on_error: '#000000',
  highlight: '#CCCCCC',
  outline: '#B3B3B3',
  sub_text: '#D9D9D9',
  header_bg: '#1f1f1f',
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
