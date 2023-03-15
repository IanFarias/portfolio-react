import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { IDefaultTheme, ITheme } from './types';
import lightTheme from './themes/light';
import GlobalStyle from './global';
import defaultTheme from './defaultTheme';

export interface Props {
  theme?: ITheme;
  children?: ReactNode;
}

interface ITeste extends ITheme, IDefaultTheme {}

export const ThemeProvider: React.FC<Props> = (props) => {
  const { children, theme = lightTheme } = props;

  return (
    <StyledThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
