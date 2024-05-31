// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminLogin = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      navigate('/naving');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/adminsignup">Create an Account</Link>
      </p>
    </div>
  );
};

export default AdminLogin;

// EmployeeLogin.js (Similar to AdminLogin.js)
