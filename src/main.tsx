import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemingProvider } from './context/ThemingContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemingProvider>
      <App />
    </ThemingProvider>
  </React.StrictMode>
);
