import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import colorConfig from './config/colors.json';
import { PaletteProvider } from './context/PaletteContext';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import { ColorConfig } from './types/colors';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} 
      />
      <Route 
        path="/register" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} 
      />
      <Route 
        path="/forgot-password" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <ForgotPassword />} 
      />
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/" 
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
      />
    </Routes>
  );
};

const App: React.FC = () => {
  const config = colorConfig as ColorConfig;
  const activeTheme = config.themes.find(theme => theme.name === config.activeTheme);
  const colors = activeTheme ? activeTheme.colors : config.themes[0].colors;

  return (
    <ThemeProvider>
      <PaletteProvider colors={colors}>
        <Router>
          <AppContent />
        </Router>
      </PaletteProvider>
    </ThemeProvider>
  );
};

export default App;