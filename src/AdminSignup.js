// AdminSignup.js
import React, { useState } from 'react';

const AdminSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add logic to create a new admin account here
    alert('Admin account created successfully.');
  };

  return (
    <div className="signup-form">
      <h2>Admin Signup</h2>
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
  );
};

export default AdminSignup;

// EmployeeSignup.js (Similar to AdminSignup.js)
