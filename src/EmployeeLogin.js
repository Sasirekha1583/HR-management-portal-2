// EmployeeLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // You should implement your authentication logic here
    if (username === 'employee' && password === 'employee') {
      setLoggedIn(true);
      navigate('/employeemanagement'); // Redirect to employee dashboard
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Employee Login</h2>
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
    </div>
  );
};

export default EmployeeLogin;
