// pages/PatientStats.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";



class PatientStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
      <h3 className="mt-5">Stats</h3>
      <h1>{this.props.patient.name}</h1>
      </Col>
      
    );
  }
}

export default PatientStats;