// pages/PatientDiary.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Calendar from 'react-calendar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

class PatientDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
      <h3 className="mt-5">Calendar</h3>
      <h1>{this.props.patient.name}</h1>
       <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Diary Entry', date: '2021-03-03' },
          { title: 'Diary Entry', date: '2021-03-05' }
        ]}
        selectable = {true}
      />
      </Col>
    );
  }
}

export default PatientDiary; 