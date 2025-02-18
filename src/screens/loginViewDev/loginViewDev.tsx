// import { getToken, googleLogin, logout } from '../../services/authService';
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';

import { auth } from '../../config/firebaseConfig';
import { googleLogin } from '../../services/authService';

const LoginViewDev = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // TODO: check if user has role if not navigate to join-group if yes navigate to homepage
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    await googleLogin()
      .then((result) => {
        if (result.roles.length === 0) {
          navigate('/join-group');
        } else {
          // TODO: implement homepage navigation
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Google login failed:', error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginViewDev;
