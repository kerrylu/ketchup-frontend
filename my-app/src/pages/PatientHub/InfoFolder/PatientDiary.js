// pages/PatientDiary.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

class PatientDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    text : "" //default value- should be text from today or nothing?
  }
  
  render() {
    return (
      <Col> 
      <h3 className="mt-5">Calendar</h3>
      <h1>{this.props.patient.name}</h1>
      <h1>{this.state.text}</h1>
       <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        selectable = {true}
        dateClick = {this.handleDateClick}
        aspectRatio = {2}
        contentHeight = {500}
      />
      </Col>
    );
  }
  handleDateClick = (arg) =>{
    //get text data from database
    this.setState({text: arg.dateStr});
  }
}

export default PatientDiary; 