import React, { Component } from 'react';
import './ProfileViewer.css';

class ProfileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: '',
      profile: null,
      error: null,
    };
  }

  handleEmpIdChange = (event) => {
    this.setState({ empid: event.target.value });
  };

  getProfile = () => {
    const { empid } = this.state;

    // Replace with the URL of your backend endpoint
    fetch(`http://localhost:8080/ppshowbyid/${empid}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Profile not found');
        }
      })
      .then((data) => {
        this.setState({ profile: data, error: null });
      })
      .catch((error) => {
        this.setState({ profile: null, error: error.message });
      });
  };

  render() {
    const { empid, profile, error } = this.state;

    return (
        <div className="container"> 
        <h1>Personal Profile Viewer</h1>
        <label htmlFor="empid">Enter Employee ID:</label>
        <input
          type="number"
          id="empid"
          value={empid}
          onChange={this.handleEmpIdChange}
          placeholder="Enter Employee ID"
        />
        <button onClick={this.getProfile}>View Profile</button>
        <div className="profile-details">
        {error ? (
            <p className="error-message">{error}</p>
          ) : (
            profile && (
            <div>
              <h2>Profile Details</h2>
              <p><strong>Employee ID:</strong> {profile.empid}</p>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
              <p><strong>Mobile Number:</strong> {profile.mobileNo}</p>
              <p><strong>Email:</strong> {profile.mailId}</p>
              <p><strong>Aadhar Number:</strong> {profile.aadharNo}</p>
              <p><strong>Bio:</strong> {profile.bio}</p>
            </div>
           )
           )}
         </div>
       </div>
     );
   }
 }

export default ProfileViewer;

{/*import React, { Component } from 'react';
import axios from 'axios';

class ProfileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',
      profile: null,
      error: null,
    };
  }

  handleEmpIdChange = (event) => {
    this.setState({ empId: event.target.value });
  };

  getProfile = () => {
    const { empId } = this.state;

    // Replace with the URL of your backend endpoint
    axios.get(`/ppshowbyid/${empId}`)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ profile: response.data, error: null });
        } else {
          throw new Error('Profile not found');
        }
      })
      .catch((error) => {
        this.setState({ profile: null, error: error.message });
      });
  };

  render() {
    const { empId, profile, error } = this.state;

    return (
      <div>
        <h1>Personal Profile Viewer</h1>
        <label htmlFor="empId">Enter Employee ID:</label>
        <input
          type="number"
          id="empId"
          value={empId}
          onChange={this.handleEmpIdChange}
          placeholder="Enter Employee ID"
        />
        <button onClick={this.getProfile}>View Profile</button>
        <div>
          {profile && (
            <div>
              <h2>Profile Details</h2>
              <p><strong>Employee ID:</strong> {profile.empid}</p>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
              <p><strong>Mobile Number:</strong> {profile.mobileNo}</p>
              <p><strong>Email:</strong> {profile.mailId}</p>
              <p><strong>Aadhar Number:</strong> {profile.aadharNo}</p>
              <p><strong>Bio:</strong> {profile.bio}</p>
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  }
}

export default ProfileViewer;
 */}