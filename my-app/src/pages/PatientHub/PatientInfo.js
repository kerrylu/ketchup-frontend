// pages/patientInfo.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./patientHub.css";

class PatientInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
}

export default PatientInfo;