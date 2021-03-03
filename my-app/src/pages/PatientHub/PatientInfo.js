// pages/patientInfo.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import PatientDiary from "./InfoFolder/PatientDiary";
import PatientGraph from "./InfoFolder/PatientGraph";
import PatientNotes from "./InfoFolder/PatientNotes";
import PatientStats from "./InfoFolder/PatientStats";
import "./PatientHub.css";

class PatientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display : "Graph"};
  }
  graphClicked = () => {
    this.setState({display: "Graph"})
  }
  diaryClicked = () =>  {
    this.setState({display: "Diary"})
  }
  statsClicked = () =>  {
    this.setState({display: "Stats"})
  }
  notesClicked = () =>  {
    this.setState({display: "Notes"})
  }

  render() {
    return (
      <Container style={{ textAlign: "center" }}>
      
      <Button variant="secondary" size = "lg" onClick={this.graphClicked}>Graph</Button>{' '}
      <Button variant="secondary" size = "lg" onClick={this.diaryClicked}>Diary</Button>{' '}
      <Button variant="secondary" size = "lg" onClick={this.statsClicked}>Stats</Button>{' '}
      <Button variant="secondary" size = "lg" onClick={this.notesClicked}>Notes</Button>
      
      {this.state.display == "Graph" && <PatientGraph patient = {this.props.patient} display = "2 Weeks"/>}
      {this.state.display == "Diary" && <PatientDiary patient = {this.props.patient}/>}
      {this.state.display == "Stats" && <PatientStats patient = {this.props.patient}/>}
      {this.state.display == "Notes" && <PatientNotes patient = {this.props.patient}/>}

      </Container>
    );
  }
}

export default PatientInfo;