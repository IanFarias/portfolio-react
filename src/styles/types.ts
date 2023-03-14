export interface ITheme {
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

    success: string;

    grey: {
      100: string;
      200: string;
      300: string;
    };
    switch: {
      button: string;
      background: string;
    };
  };
}
