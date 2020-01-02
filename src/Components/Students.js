import React, { Component } from "react";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";
import axios from "axios";
import StudentDetails from "../Components/StudentDetails";

export default class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudent: 20176309
    };
  }

  componentDidMount() {
    this.getStudentData();
  }
  getStudentData() {
    axios.get("assets/studentList.json").then(response => {
      this.setState({ studentList: response });
    });
  }

  render() {
    if (!this.state.studentList) return <p>Loading Data</p>;
    return (
      <div>
        <div className="col-md-3">
          {this.state.studentList.data.map(student => (
            <Panel bsStyle="info" key={student.name} className="centeralgin">
              <Panel.Heading>
                <Panel.Title componentClass="h3">{student.name}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <p>{student.email}</p>
                <p>{student.status}</p>
                <Button
                  bsStyle="info"
                  onClick={() => {
                    this.setState({ selectedStudent: student.id });
                  }}
                >
                  {" "}
                  View More Info
                </Button>
              </Panel.Body>
            </Panel>
          ))}
        </div>
        <div className="col-md-6">
          <StudentDetails value={this.state.selectedStudent}></StudentDetails>
        </div>
      </div>
    );
  }
}
