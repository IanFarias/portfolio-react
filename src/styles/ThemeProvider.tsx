import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { ITheme } from './types';
import lightTheme from './themes/light';
import GlobalStyle from './global';

export interface Props {
  theme?: ITheme;
  children?: ReactNode;
}

export const ThemeProvider: React.FC<Props> = (props) => {
  const { children, theme = lightTheme } = props;

  return (
    <StyledThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
