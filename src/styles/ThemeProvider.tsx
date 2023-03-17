import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { IThemeColors } from './types';
import lightTheme from './themes/light';
import GlobalStyle from './global';
import defaultTheme from './defaultTheme';

export interface Props {
  theme?: IThemeColors;
  children?: ReactNode;
}

export const ThemeProvider: React.FC<Props> = (props) => {
  const { children, theme = lightTheme } = props;

  return (
    <StyledThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
