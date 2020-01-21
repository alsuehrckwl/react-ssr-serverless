import React from 'react';
import './App.css';
import { useTheme, ThemeProvider } from './context/ThemeContext/ThemeContext';
import Layout from './layout/Layout';
import Header from './layout/Header/Header';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <Router history={history}>
        <Header />
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
