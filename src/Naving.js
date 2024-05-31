import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink, Route, Routes,Outlet } from "react-router-dom";
import VacancyComponent from './VacancyComponent';
import HomePage from './HomePage';
import EmployeeManagement from './EmployeeManagement';
import AttendanceManagement from './AttendanceManagement';
import ProfileViewer from './ProfileViewer';
import './Naving.css';
function Naving() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={{ height: '100vh', display: 'flex' }}>
      <Sidebar style={{ height: '100vh' ,color:'black'}}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{color:'black'}}>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>
          <NavLink to="/naving/homepage" activeClassName="active" className="NavLink">
              Home
            </NavLink>
          </MenuItem>
          
          <MenuItem icon={<ContactsOutlinedIcon />}>
          <NavLink to="/naving/employeemanagement" activeClassName="active" className="NavLink">
              Employees
            </NavLink>
          </MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>
          <NavLink to="/naving/profileviewer" activeClassName="active" className="NavLink">
              Profiles
            </NavLink>
          </MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>
          <NavLink to="/naving/attendancemanagement" activeClassName="active" className="NavLink">
              Attendance
            </NavLink>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>
          <NavLink to="/naving/vacancycomponent" activeClassName="active" className="NavLink">
              Job Vacancies
            </NavLink>
          </MenuItem>
          
        </Menu>
      </Sidebar>
      <main>
        {/* Defining routes path and rendering components as element */}
        <Routes>
            
          
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/employeemanagement" element={<EmployeeManagement />} />
          <Route path="/vacancycomponent" element={<VacancyComponent />} />
          <Route path="/profileviewer" element={<ProfileViewer />} />
        <Route path="/attendancemanagement" element={<AttendanceManagement />} />
          
        </Routes>
        
      </main>
    </div>
  );
}


export default Naving;



