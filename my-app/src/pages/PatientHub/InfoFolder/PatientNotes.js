// pages/PatientNotes.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";



class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
      <h3 className="mt-5">Notes</h3>
      <h1>{this.props.patient.name}</h1>
      </Col>
    );
  }
}

export default PatientNotes;