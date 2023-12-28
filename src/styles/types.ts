export interface IDefaultTheme {
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface IThemeColors {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    terciary: string;

    background: string;

    text: string;
    title: string;

    white: string;
    black: string;
    red: string;
    navy: string;
    lightPurple: string;

    success: string;

    grey: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };

    card: {
      background: string;
    };

    switch: {
      button: string;
      background: string;
    };
  };
}

export interface ITheme extends IThemeColors, IDefaultTheme {}
