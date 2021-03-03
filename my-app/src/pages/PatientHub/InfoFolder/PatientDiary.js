// pages/PatientDiary.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";



class PatientDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
      <h3 className="mt-5">Diary</h3>
      <h1>{this.props.patient.id}</h1>
      </Col>
    );
  }
}

export default PatientDiary; 