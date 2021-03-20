// pages/patientSum.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./PatientHub.css"


class PatientSum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={()=>this.props.handler(this.props.patient)}>
      <Row >
        <img src={this.props.patient.profilePicture} class="rounded-circle mr-1" width="40" height="40"></img>
        <Col>
          <div class="flex-grow-1 ml-3"> {this.props.patient.name} </div> 
          <div class ="small ml-3" > Mood: {this.props.patient.averageScore} </div>
        </Col>
        
        {this.props.patient.status == "G" && <div class="badge bg-success float-right" style = {{width : "30px"}} > </div>}
        {this.props.patient.status == "Y" && <div class="badge bg-warning float-right" style = {{width : "30px"}}>  </div>}
        {this.props.patient.status == "R" && <div class="badge bg-danger float-right" style = {{width : "30px"}}>  </div>}
      </Row>
      </div>
      );
  }
}

export default PatientSum;