import React from 'react';

import { Container, Logo, GoogleButton } from './LoginScreenStyles';

const LoginScreen = () => {
  return (
    <Container>
      <Logo src="univent_logo.svg" alt="Unievent Planner" />
      <GoogleButton
        variant="contained"
        startIcon={<img src="./google-logo.svg" alt="Google" />}
        onClick={() => {
          /* tutaj Google login */
        }}
      >
        Zaloguj się z Google
      </GoogleButton>
    </Container>
  );
};

export default LoginScreen;
