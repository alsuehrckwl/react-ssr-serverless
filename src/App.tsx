import React from 'react';
import './App.css';
import {
  useTheme,
  ThemeContext,
  ThemeProvider,
  themeInitialState
} from './context/ThemeContext/ThemeContext';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <Home />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
