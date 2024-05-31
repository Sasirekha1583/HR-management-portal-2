// EmployeeSignup.js
import React, { useState } from 'react';

const EmployeeSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // You should implement your signup logic here
    alert('Employee account created successfully.');
    // Redirect to the login page or perform other actions as needed
  };

  return (
    <div className="container">
      <div className="signup-form">
        <h2>Employee Signup</h2>
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
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default EmployeeSignup;
