import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="container"> 
    
      <h1>HUMAN RESOURCE MANAGEMENT PORTAL!</h1>
      <p>
        Welcome to the HRM Portal, where you can manage employee profiles,
        view reports, and streamline your HR processes.
      </p>
      <a href="/profileviewer" className="button">View Employee Profiles</a> 
   
    </div>
  );
};

export default HomePage;
