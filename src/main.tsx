import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './components/theme/theme-provider';
import { ToastProvider } from './components/notifications/toast-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <ToastProvider />
      <App />
    </ThemeProvider>
  </StrictMode>
);