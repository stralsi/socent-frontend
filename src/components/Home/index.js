import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      applications: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/applications`)
    .then(result => {
      this.setState({applications: result.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {this.state.applications.map(application => <li key={application.id}>{application.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Home;
