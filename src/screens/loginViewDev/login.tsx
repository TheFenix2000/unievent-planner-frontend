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
      const response = await fetch(
        'http://localhost:4455/api/v1/student-route',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.text();
      console.log('User Route Response:', data);
      alert(data);
    } catch (error) {
      console.error('User route failed:', error);
      alert('User route failed');
    }
  };

  const handlePresidentRoute = async () => {
    const token = await getToken();
    if (token === null) {
      alert('Please login first');
      return;
    }
    try {
      const response = await fetch(
        'http://localhost:4455/api/v1/president-route',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.text();
      console.log('President Route Response:', data);
      alert(data);
    } catch (error) {
      console.error('President route failed:', error);
      alert('President route failed');
    }
  };

  const addStudentRole = async () => {
    const token = await getToken();
    if (token === null) {
      alert('Please login first');
      return;
    }
    try {
      const response = await fetch(
        'http://localhost:4455/api/v1/accounts/add-student-role',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.text();
      console.log('Student Route Response:', data);
      alert(data);
    } catch (error) {
      console.error('Student route failed:', error);
      alert('Student route failed');
    }
  };

  const addPresidentRole = async () => {
    const token = await getToken();
    if (token === null) {
      alert('Please login first');
      return;
    }
    try {
      const response = await fetch(
        'http://localhost:4455/api/v1/accounts/add-president-role',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.text();
      console.log('Response:', data);
      alert(data);
    } catch (error) {
      console.error('Route failed:', error);
      alert('President route failed');
    }
  };

  return (
    <div>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={handleAdminRoute}>Test ADMIN Route</button>
      <button onClick={handleUserRoute}>Test STUDENT Route</button>
      <button onClick={handlePresidentRoute}>Test PRESIDENT Route</button>
      <button onClick={logout}>Logout</button>
      <button onClick={addStudentRole}>Add student role</button>
      <button onClick={addPresidentRole}>Add president role</button>
    </div>
  );
};

export default Login;
