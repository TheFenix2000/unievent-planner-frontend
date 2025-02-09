import { getToken, googleLogin, logout } from '../../services/authService';

const Login: React.FC = () => {
  const handleAdminRoute = async () => {
    const token = await getToken();
    if (token === null) {
      alert('Please login first');
      return;
    }
    console.log('Token admin:', token);

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
    const token = await getToken();
    if (token === null) {
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
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={handleAdminRoute}>Test Admin Route</button>
      <button onClick={handleUserRoute}>Test User Route</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
