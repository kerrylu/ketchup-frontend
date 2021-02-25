// pages/patientSum.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./PatientHub.css"
import {  MDBIcon } from "mdbreact";


class PatientSum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Row>
        <img src={this.props.profilePicture} class="rounded-circle mr-1" width="40" height="40"></img>
        <Col>
          <div class="flex-grow-1 ml-3"> {this.props.name} </div> 
          <div class ="small ml-3" > Mood: {this.props.averageScore} </div>
        </Col>
        
        {this.props.status == "G" && <div class="badge bg-success float-right" style = {{width : "30px"}} > <i class="bi bi-flag-fill"></i></div>}
        {this.props.status == "Y" && <div class="badge bg-warning float-right" style = {{width : "30px"}}>  </div>}
        {this.props.status == "R" && <div class="badge bg-danger float-right" style = {{width : "30px"}}>  </div>}
      </Row>
      );
  }
}

export default PatientSum;