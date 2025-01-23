import React, { useState } from 'react';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

const Login: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      setToken(token);
      console.log('Token:', token);
      const response = await fetch(
        'http://localhost:4455/api/v1/auth/verify-token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('Verify Token Response:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleAdminRoute = async () => {
    if (!token) {
      alert('Please login first');
      return;
    }
    try {
      const response = await fetch('http://localhost:4455/api/v1/admin-route', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.text();
      console.log('Admin Route Response:', data);
      alert(data);
    } catch (error) {
      console.error('Admin route failed:', error);
      alert('Admin route failed');
    }
  };

  const handleUserRoute = async () => {
    if (!token) {
      alert('Please login first');
      return;
    }
    try {
      const response = await fetch('http://localhost:4455/api/v1/user-route', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.text();
      console.log('User Route Response:', data);
      alert(data);
    } catch (error) {
      console.error('User route failed:', error);
      alert('User route failed');
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleAdminRoute}>Test Admin Route</button>
      <button onClick={handleUserRoute}>Test User Route</button>
    </div>
  );
};

export default Login;
