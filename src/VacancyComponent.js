import React, { Component } from 'react';
import axios from 'axios';
import './VacancyComponent.css'; 

class VacancyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacancies: [],
      newVacancy: {
        empid: '',
        companyName: '',
        location: '',
        role: '',
        jobType: '',
        workMode: '',
        education: '',
      },
    };
  }

  componentDidMount() {
    this.fetchVacancies();
  }

  fetchVacancies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/showvacancies');
      this.setState({ vacancies: response.data });
    } catch (error) {
      console.error('Error fetching vacancies:', error);
    }
  };

  addVacancy = async () => {
    try {
      const response = await axios.post('http://localhost:8080/addjob', this.state.newVacancy);
      const newVacancies = [...this.state.vacancies, response.data];
      this.setState({
        vacancies: newVacancies,
        newVacancy: {
          empid: '',
          companyName: '',
          location: '',
          role: '',
          jobType: '',
          workMode: '',
          education: '',
        },
      });
    } catch (error) {
      console.error('Error adding vacancy:', error);
    }
  };

  deleteVacancy = async (vacancyId) => {
    try {
      await axios.delete(`http://localhost:8080/delid/${vacancyId}`);
      const updatedVacancies = this.state.vacancies.filter(
        (vacancy) => vacancy.id !== vacancyId
      );
      this.setState({ vacancies: updatedVacancies });
    } catch (error) {
      console.error('Error deleting vacancy:', error);
    }
  };

  render() {
    return (
        <div className="vacancy-container">
        <h1>Vacancy Management</h1>
        <div className="add-vacancy-section">
          <h2>Add New Vacancy</h2>
          <input
            type="text"
            placeholder="Employee ID"
            value={this.state.newVacancy.empid}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, empid: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Company Name"
            value={this.state.newVacancy.companyName}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, companyName: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Location"
            value={this.state.newVacancy.location}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, location: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Role"
            value={this.state.newVacancy.role}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, role: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Job Type"
            value={this.state.newVacancy.jobType}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, jobType: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Work Mode"
            value={this.state.newVacancy.workMode}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, workMode: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Education"
            value={this.state.newVacancy.education}
            onChange={(e) =>
              this.setState({
                newVacancy: { ...this.state.newVacancy, education: e.target.value },
              })
            }
          />
          <button onClick={() => this.addVacancy()}>Add</button>
          
        </div>
        <div className="vacancy-list-section">
          <h2>Vacancies List</h2>
          <table className="vacancy-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vacancies.map((vacancy) => (
                <tr key={vacancy.id}>
                  <td>{vacancy.companyName}</td>
                  <td>{vacancy.location}</td>
                  <td>
                    <button onClick={() => this.deleteVacancy(vacancy.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VacancyComponent;
