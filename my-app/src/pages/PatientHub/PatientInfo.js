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
      <Container>
      <Row>
        <button onClick={this.graphClicked}>Graph</button>
        <button onClick={this.diaryClicked}>Diary</button>
        <button onClick={this.statsClicked}>Stats</button>
        <button onClick={this.notesClicked}>Notes</button>
      </Row>
      {this.state.display == "Graph" && <PatientGraph />}
      {this.state.display == "Stats" && <PatientStats />}
      {this.state.display == "Diary" && <PatientDiary />}
      {this.state.display == "Notes" && <PatientNotes />}

    </Container>
    );
  }
}

export default PatientInfo;