// pages/patientHub.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./PatientHub.css"
import "./PatientInfo.js"
import PatientInfo from "./PatientInfo.js";
import "./PatientSum.js"
import PatientSum from "./PatientSum.js";

//import ScrollView from "./ScrollView";
const grace = {
  name : "grace",
  status : "R",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar8.png",
  averageScore : "-1"
}
const brycen = {
  name : "Brycen",
  status : "G",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar6.png",
  averageScore : "0"
}
const danny = {
  name : "Danny",
  status : "G",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar4.png",
  averageScore : "0.3"
}


class PatientHub extends React.Component {
  constructor(props) {
    super(props);
    this.getTherapist = this.getTherapist.bind(this);
    this.getPatients = this.getPatients.bind(this);
    this.makePatientBoard = this.makePatientBoard.bind(this);
    this.setCurrentPatient = this.setCurrentPatient.bind(this); 

    const therapistID = this.getTherapist()
    var patients = this.getPatients(therapistID)
    var curPatient = patients[0];
    var patientBoard = this.makePatientBoard(patients)
    this.state = {therapistID : therapistID,
                  patients : patients,
                  curPatient : curPatient,
                  patientBoard : patientBoard};
  }

  getPatients(therapist) {
    // Add patients that fall under given therapist
    let patients = [brycen, danny, grace]

    return (patients)
  }

  getTherapist() {
    // Get the ID of the logged in therapist
    let dummyObject = brycen

    return (dummyObject)
  }

  setCurrentPatient(patient) {
    this.setState({curPatient : patient})
  }

  makePatientBoard(patients) {
    // Go through paitent table and access their name, pp, flag, and sentiment score ACCESS FROM STATE
    var listItems = []
    
    for (const i in patients) {
      listItems.push(<PatientSum patient = {patients[i]} handler={this.setCurrentPatient} value={patients[i]}/>)
    }
    return (listItems)
  }

//
  render() {
    return (
      
      <Container>
                <h1 >Patient Hub</h1>     
        <Row >

          <Col xs={3}>
            <input type="text" class="form-control my-3" placeholder="Search..."></input>

            <div className="react-scrollable-list" >
              {this.state.patientBoard}
            </div>
          </Col>


          <Col >
            <PatientInfo patient = {this.state.curPatient} />
          </Col>

        </Row>

        <p> {this.state.curPatient.name} </p>

      </Container>
    );
  }
}

export default PatientHub;