// import { useState } from 'react';

import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAuth,
} from 'firebase/auth';

import { auth } from '../config/firebaseConfig';

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
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

export const logout = async () => {
  const auth = getAuth();
  signOut(auth).catch((error) => {
    console.log('error:', error);
    // An error happened.
  });
};

export const getToken = async () => {
  const auth = getAuth();
  return (await auth.currentUser?.getIdToken()) || null;
};
