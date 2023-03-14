import { useContext } from 'react';
import { ThemeProvider } from './styles/ThemeProvider';
import { ThemingContext } from './context/ThemingContext';
import Home from './pages/Home';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

function App() {
  const { theme } = useContext(ThemingContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
