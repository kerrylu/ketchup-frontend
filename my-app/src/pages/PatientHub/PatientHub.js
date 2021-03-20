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
  id : "gft56",
  name : "grace",
  status : "R",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar8.png",
  averageScore : "-1",
}
const brycen = {
  id : "bcr16",
  name : "Brycen",
  status : "G",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar6.png",
  averageScore : "0"
}
const danny = {
  id : "dcc33",
  name : "Danny",
  status : "G",
  profilePicture : "https://bootdey.com/img/Content/avatar/avatar4.png",
  averageScore : "0.3"
}

let graceTexts = []
for(let i = 0; i<60; i++) {var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {body: "Grace Text",time: formatDate(d),emotion : "happy",sentiment : Math.random()}
  graceTexts.push(Text)
}
const brycenTexts = []
for(let i = 0; i<60; i++) {
  var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {body: "Brycen Text",time: formatDate(d),emotion : "happy",sentiment : Math.random()}
  brycenTexts.push(Text)
}
let dannyTexts = []
for(let i = 0; i<60; i++) {
  var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {body: "Danny Text",time: formatDate(d),emotion : "happy",sentiment : Math.random()
  }
  dannyTexts.push(Text)
}

//UsefulFunctions
 function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  date = mm+'/'+dd+'/'+yyyy;
  return date
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
    let Data = this.getData(curPatient.id)
    console.log(Data[1])
    this.state = {therapistID : therapistID,
                  patients : patients,
                  curPatient : curPatient,
                  patientBoard : patientBoard,
                  lineData: {
                    labels: Data[0],
                    datasets: [
                      {
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(184, 185, 210, .3)",
                        borderColor: "rgb(146, 170, 255)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgb(146, 170, 255)",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: Data[1]
                      }
                    ]
                  }
                };
  }
  getData(id) {
    let numDays = 14;
    if (this.props.display == "2 Weeks") {numDays = 14}
    else if (this.props.display == "2 Months") {numDays = 60}
    else if (this.props.display == "6 Months") {numDays = 180}
    else if (this.props.display == "1 Year") {numDays = 365}

    let texts = []
    if (id == "bcr16") {
      texts = (brycenTexts.slice(0, numDays))
    }
    if (id == "gft56") {texts = (graceTexts.slice(0, numDays))}
    if (id == "dcc33") {texts = (dannyTexts.slice(0, numDays))}

    var daysData = []
    var sentimentData = []
    for (const i in texts) {
      daysData.push(texts[i].time)
      sentimentData.push(texts[i].sentiment)
    }
    return ([daysData, sentimentData])
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
    let newData = this.getData(patient.id)
    console.log(newData[1])
    this.setState({lineData :  {
      labels: newData[0],
      datasets: [
        {
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(146, 170, 255)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(146, 170, 255)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: newData[1]
        }
      ]
    }})
  }

  makePatientBoard(patients) {
    // Go through paitent table and access their name, pp, flag, and sentiment score ACCESS FROM STATE
    var listItems = []
    
    for (const i in patients) {
      listItems.push(<PatientSum patient = {patients[i]} handler={this.setCurrentPatient}/>)
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
            <PatientInfo patient = {this.state.curPatient} lineChartData={this.state.lineData} />
          </Col>

        </Row>

      </Container>
    );
  }
}

export default PatientHub;