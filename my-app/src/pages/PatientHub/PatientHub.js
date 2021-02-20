// pages/patientHub.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./patientHub.css"
import "./PatientInfo.js"
import "./PatientSum.js"

function PatientSum() {
  return(
    <Container>
    <Row>
      <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"></img>
      <div class="flex-grow-1 ml-3">Brycen Rushing</div> 
      <div class="badge bg-success float-right">Flag</div>
    </Row>
    </Container>
    );
}

function PatientInfo() {
  return(
    <Container>
      <Row>
        <Button>Graph</Button>
        <Button>Stats</Button>
        <Button>Diary</Button>
        <Button>Notes</Button>
      </Row>
      <p>GRAPH</p>
    </Container>
    );
}


class PatientHub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <Container>
                <h1>Patient Hub</h1>


        <Row>
          <Col xs={3}>
            <input type="text" class="form-control my-3" placeholder="Search..."></input>
            
            <PatientSum />
            <PatientSum />
            <PatientSum />
            
          </Col>

          <Col className="infoSide">
            <PatientInfo />
          </Col>
        </Row>
        



          </Container>
      
        
    );
  }
}

export default PatientHub;