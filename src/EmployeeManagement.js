import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeManagement.css'; 

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    hireDate: '',
    jobTitle: '',
    salary: ''
    // Add other fields here
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({});

  useEffect(() => {
    // Fetch employee data from the backend when the component mounts
    axios.get('http://localhost:8080/showemployeedetails') // Replace with your backend API endpoint
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = () => {
    axios.post('http://localhost:8080/addemployee', newEmployee) // Replace with your backend API endpoint
      .then((response) => {
        setEmployees([...employees, response.data]);
        setNewEmployee({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            hireDate: '',
            jobTitle: '',
            salary: ''
          // Reset other fields
        });
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };

  const handleEdit = (employee) => {
    setIsEditing(true);
    setEditedEmployee({ ...employee });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const updateEmployee = () => {
    axios
      .put(`http://localhost:8080/empupdatebyid/${editedEmployee.id}`, editedEmployee) // Replace with your backend API endpoint
      .then((response) => {
        const updatedEmployees = employees.map((employee) =>
          employee.id === editedEmployee.id ? response.data : employee
        );
        setEmployees(updatedEmployees);
        setIsEditing(false);
        setEditedEmployee({});
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedEmployee({});
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <div className="add-form">
      <input
        type="text"
        name="firstName"
        value={newEmployee.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={newEmployee.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="email"
        value={newEmployee.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phoneNumber"
        value={newEmployee.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="hireDate"
        value={newEmployee.hireDate}
        onChange={handleInputChange}
        placeholder="Hire Date"
      />
      <input
        type="text"
        name="jobTitle"
        value={newEmployee.jobTitle}
        onChange={handleInputChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="salary"
        value={newEmployee.salary}
        onChange={handleInputChange}
        placeholder="Salary"
      />
        {/* Add input fields for other employee properties */}
        <button onClick={addEmployee}>Add Employee</button>
        <br></br>
      </div>
      {isEditing && (
        <div className="edit-form"> 
          <h2>Edit Employee</h2>
          <input
          type="text"
          name="firstName"
          value={editedEmployee.firstName}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={editedEmployee.lastName}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="email"
          value={editedEmployee.email}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          value={editedEmployee.phoneNumber}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="hireDate"
          value={editedEmployee.hireDate}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="jobTitle"
          value={editedEmployee.jobTitle}
          onChange={handleEditInputChange}
        />
        <input
          type="text"
          name="salary"
          value={editedEmployee.salary}
          onChange={handleEditInputChange}
        />
          
          {/* Add input fields for other employee properties */}
          <button onClick={updateEmployee}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Hire Date</th>
          <th>Job Title</th>
          <th>Salary</th>
          {/* Add table headers for other employee properties */}
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empid}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.jobTitle}</td>
            <td>{employee.salary}</td>
              {/* Add table data cells for other employee properties */}
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
