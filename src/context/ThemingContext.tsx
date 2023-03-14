import { createContext, ReactNode } from 'react';

import { usePersistedState } from '../utils/usePersistedState';

interface ThemingProviderProps {
  children: ReactNode;
}

interface ThemingContextData {
  theme: string;
  toggleTheme: () => void;
}

const THEME_KEY = 'theme';

export const ThemingContext = createContext({} as ThemingContextData);

export const ThemingProvider = ({ children }: ThemingProviderProps) => {
  const [theme, setTheme] = usePersistedState(THEME_KEY, 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemingContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemingContext.Provider>
  );
};
