import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { theme, GlobalStyle } from './assets/styles/theme';
import JoinGroup from './screens/JoinGroupScreen/JoinGroupScreen';
import Login from './screens/LoginScreen/LoginScreen';
{
  /* TODO: delete line below before merge, to tests only */
}
import LoginViewDev from './screens/loginViewDev/login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-group" element={<JoinGroup />} />
          {/* TODO: delete line below before merge, to tests only */}
          <Route path="/home" element={<LoginViewDev />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
