import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Naving from './Naving';
import LandingPage from './LandingPage';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import EmployeeLogin from './EmployeeLogin';
import EmployeeSignup from './EmployeeSignup';
import VacancyComponent from './VacancyComponent';
import HomePage from './HomePage';
import EmployeeManagement from './EmployeeManagement';
import AttendanceManagement from './AttendanceManagement';
import ProfileViewer from './ProfileViewer';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    
      <div>
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="../naving/homepage" /> : <LandingPage />} />
          <Route path="/adminlogin" element={<AdminLogin setLoggedIn={setLoggedIn} />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/employeelogin" element={<EmployeeLogin setLoggedIn={setLoggedIn} />} />
          <Route path="/employeesignup" element={<EmployeeSignup />} />
          <Route path="/naving/*" element={<Naving />}/>
           {/* <Route path="homepage" element={<HomePage />} />
            <Route path="employeemanagement" element={<EmployeeManagement />} />
            <Route path="vacancycomponent" element={<VacancyComponent />} />
            <Route path="profileviewer" element={<ProfileViewer />} />
  <Route path="attendancemanagement" element={<AttendanceManagement />} />
          </Route>*/}
        </Routes>
      </div>
    
  );
}

export default App;
