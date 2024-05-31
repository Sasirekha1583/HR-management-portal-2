import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true); // Set the loggedIn state to true on successful login
      navigate('/naving'); // Navigate to the home page on successful login
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
    </div>
  );
};

export default LoginForm;
