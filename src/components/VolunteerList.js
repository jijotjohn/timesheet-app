import React, { Component } from 'react';
import config from '../config';
import { load } from '../helpers/spreadsheet';
import './table.css';

class VolunteerList extends Component {
  state = {
    volunteers: [],
    error: null
  }
  
  render() {
    const {volunteers, error} = this.state
    if(error){
        return <div>{this.state.error}</div>;
    }
    return(
        <table className="table">
        <tr>
            <th>Name</th>
            <th>Email Id</th> 
        </tr>
        {volunteers.map((volunteer, i) => (
            <tr>
            <td>{volunteer.name}</td>
            <td>{volunteer.email}</td>
            </tr>
        ))}
        </table>
    );
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  };

  onLoad = (data, error) => {
    if (data) {
      const volunteers = data.volunteers;
      this.setState({ volunteers });
    } else {
      this.setState({ error });
    }
  };
}

export default VolunteerList;