import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemingProvider } from './context/ThemingContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemingProvider>
      <App />
    </ThemingProvider>
  </React.StrictMode>
);
