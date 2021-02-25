// pages/patientHub.js

import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./PatientHub.css"
import "./PatientInfo.js"
import PatientInfo from "./PatientInfo.js";
import "./PatientSum.js"
import PatientSum from "./PatientSum.js";

//import ScrollView from "./ScrollView";

let listItems = []
    for (let i = 0; i < 20; i++) {
      listItems.push(<PatientSum name = "Brycen" status = "G" profilePicture = "https://bootdey.com/img/Content/avatar/avatar5.png" averageScore = "1"/>)
      listItems.push(<PatientSum name = "DC3" status = "Y" profilePicture = "https://bootdey.com/img/Content/avatar/avatar4.png" averageScore = "0"/>)
      listItems.push(<PatientSum name = "Grace" status = "R" profilePicture = "https://bootdey.com/img/Content/avatar/avatar2.png" averageScore = "-1"/>)
}

class PatientHub extends React.Component {
  constructor(props) {
    super(props);
    
  }
//
  render() {
    return (
      
      <Container>

                <h1>Patient Hub</h1>
        <Row >

          <Col xs={3}>
            <input type="text" class="form-control my-3" placeholder="Search..."></input>

            <div className="react-scrollable-list" >
              {listItems}
            </div>

          </Col>


          <Col >

            <PatientInfo  />

          </Col>

        </Row>
        

      </Container>
    );
  }
}

export default PatientHub;