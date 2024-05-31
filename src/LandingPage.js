// LandingPage.js
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    
      <div className="landing-page">
        <h2>Welcome to the HR Management Portal</h2>
        <p>Please select your role:</p>
        <Link to="/adminlogin">Admin</Link>
        <Link to="/employeelogin">Employee</Link>
      </div>
      
  );
};

export default LandingPage;
 {/*<div className="container">
    </div>*/}