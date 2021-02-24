// pages/patientHub.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./PatientHub.css"
import "./PatientInfo.js"
import PatientInfo from "./PatientInfo.js";
import "./PatientSum.js"
import PatientSum from "./PatientSum.js";

// Swaps what info is showed when clicked


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
            <PatientSum name = "Brycen Rushing" status = "G" profilePicture = "https://bootdey.com/img/Content/avatar/avatar5.png" averageScore = "1"/>
            <PatientSum name = "DC3" status = "Y" profilePicture = "https://bootdey.com/img/Content/avatar/avatar4.png" averageScore = "0"/>
            <PatientSum name = "Grace" status = "R" profilePicture = "https://bootdey.com/img/Content/avatar/avatar2.png" averageScore = "-1"/>
            
          </Col>


          <Col>

            <PatientInfo />

          </Col>

        </Row>

      </Container>
    );
  }
}

export default PatientHub;