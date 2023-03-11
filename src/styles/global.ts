import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --text: #575757;
    --font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1.5rem;
  }

  body {
    color: var(--text);
    font-size: 16px;
    font-family: var(--font-family);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  ul, ol, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
