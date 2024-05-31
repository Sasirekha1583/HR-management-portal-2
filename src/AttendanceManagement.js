import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AttendanceManagement.css';

const AttendanceManagement = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    empid: '',
    attendanceDate: new Date(),
    checkInTime: '',
    checkOutTime: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedAttendance, setEditedAttendance] = useState({});
  const [calendarVisible, setCalendarVisible] = useState(false);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/showattendancerecord'); // Replace with your backend API endpoint
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendance({ ...newAttendance, [name]: value });
  };

  const addAttendanceRecord = () => {
    axios
      .post('http://localhost:8080/addattnd', newAttendance)
      .then((response) => {
        setAttendanceRecords([...attendanceRecords, response.data]);
        setNewAttendance({
          empid: '',
          attendanceDate: new Date(),
          checkInTime: '',
          checkOutTime: '',
        });
      })
      .catch((error) => {
        console.error('Error adding attendance record:', error);
      });
  };

  const handleEdit = (attendanceRecord) => {
    setIsEditing(true);
    setEditedAttendance({ ...attendanceRecord }); // Create a new object
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAttendance({ ...editedAttendance, [name]: value });
  };

  const updateAttendanceRecord = () => {
    axios
      .put(`http://localhost:8080/attndupdatebyid/${editedAttendance.empid}`, editedAttendance)
      .then((response) => {
        const updatedAttendanceRecords = attendanceRecords.map((record) =>
          record.empid === editedAttendance.empid ? response.data : record
        );
        setAttendanceRecords(updatedAttendanceRecords);
        setIsEditing(false);
        setEditedAttendance({});
      })
      .catch((error) => {
        console.error('Error updating attendance record:', error);
      });
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedAttendance({});
  };

  const deleteAttendanceRecord = async (a_id) => {
    try {
      await axios.delete(`http://localhost:8080/attnddelid/${a_id}`);
      const updatedAttendanceRecords = attendanceRecords.filter((record) => record.a_id !== a_id);
      setAttendanceRecords(updatedAttendanceRecords);
    } catch (error) {
      console.error('Error deleting attendance record:', error);
    }
  };

  return (
    <div className="container">
      <h1>Attendance Management</h1>
      <div className="add-form">
        <input
          type="text"
          name="empid"
          value={newAttendance.empid}
          onChange={handleInputChange}
          placeholder="Employee ID"
        />
        <div className="date-picker">
          <DatePicker
            selected={newAttendance.attendanceDate}
            onChange={(date) => setNewAttendance({ ...newAttendance, attendanceDate: date })}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Date"
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
          />
        </div>
        <input
          type="time"
          name="checkInTime"
          value={newAttendance.checkInTime}
          onChange={handleInputChange}
          placeholder="Check-In Time"
        />
        <input
          type="time"
          name="checkOutTime"
          value={newAttendance.checkOutTime}
          onChange={handleInputChange}
          placeholder="Check-Out Time"
        />
        <button onClick={addAttendanceRecord}>Add Attendance</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Attendance Date</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.a_id}>
              <td>{record.a_id}</td>
              <td>{record.empid}</td>
              <td>{record.attendanceDate}</td>
              <td>{record.checkInTime}</td>
              <td>{record.checkOutTime}</td>
              <td>
                {isEditing && editedAttendance.empid === record.empid ? (
                  <>
                    <button onClick={updateAttendanceRecord}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(record)}>Edit</button>
                )}
                <button onClick={() => deleteAttendanceRecord(record.a_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceManagement;
