// pages/PatientDiary.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Calendar from 'react-calendar'

class PatientDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
      <h3 className="mt-5">Calendar</h3>
      <h1>{this.props.patient.name}</h1>
      <div>
        <Calendar></Calendar>
      </div>
      </Col>
    );
  }
}

export default PatientDiary; 