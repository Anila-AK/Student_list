import React, { Component } from "react";
import Panel from "react-bootstrap/lib/Panel";
import axios from "axios";

export default class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // fun call for the firsttime
  componentDidMount() {
    this.getStudentDetails(this.props.value);
  }

  // fun call when compnent gets updated
  componentDidUpdate(prevProps) {
    // gets customer info only if props changed
    if (this.props.value !== prevProps.value) {
      this.getStudentDetails(this.props.value);
    }
  }

  // fun to load data from json file
  getStudentDetails(id) {
    axios.get("assets/students" + id + ".json").then(response => {
      this.setState({ StudentDetails: response });
    });
  }

  render() {
    if (!this.state.StudentDetails) {
      return <p> Loading Data</p>;
    }
    return (
      <div className="studentDetails">
        <Panel bsStyle="info" className="centeralgin">
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {this.state.StudentDetails.data.name}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Name : {this.state.StudentDetails.data.name}</p>
            <p>Email : {this.state.StudentDetails.data.email}</p>
            <p>Phone:{this.state.StudentDetails.data.phone}</p>
            <p>School: {this.state.StudentDetails.data.school}</p>
            <p>Status: {this.state.StudentDetails.data.status}</p>
            <p>Fee : {this.state.StudentDetails.data.fee}</p>
            <p>City: {this.state.StudentDetails.data.city}</p>
            <p>Country: {this.state.StudentDetails.data.country}</p>
            <p>
              Additional info: {this.state.StudentDetails.data.additionalinfo}
            </p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
