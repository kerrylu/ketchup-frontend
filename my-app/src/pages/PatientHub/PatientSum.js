// pages/patientSum.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./patientHub.css"

class PatientSum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
        <Row>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"></img>
          <div class="flex-grow-1 ml-3">Brycen Rushing</div> 
          <div class="badge bg-success float-right">Flag</div>
        </Row>
        </Container>
        );
  }
}

export default PatientSum;