import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { theme, GlobalStyle } from './assets/styles/theme';
import JoinGroup from './screens/JoinGroupScreen/JoinGroupScreen';
{
  /* TODO: delete line below before merge, to tests only */
}
import Login from './screens/loginView/login';
import LoginViewDev from './screens/loginViewDev/loginViewDev';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginViewDev />} />
          <Route path="/join-group" element={<JoinGroup />} />
          {/* TODO: delete line below before merge, to tests only */}
          <Route path="/home" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
