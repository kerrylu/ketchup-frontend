// pages/PatientNotes.js

import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Container, Col, Row, Button, } from "react-bootstrap";



class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{height: 400}} >
        <ScrollView>
          <Text>
            <Col>
              <h3 className="mt-5">Notes</h3>
            </Col>
            <br/>
              <h4 >Relationship Issues</h4>
              - Has trust issues with partner
              <br/>
              - Working to be more independent
              <br/>
              - Got into a huge fight about spending too much time with other men
              <br/>
              <br/>
              <h4>Progress Over Time</h4>
              - Came in during a major depressive episode
              <br/>
              - Has shown improvement with decreasing suicidal thoughts
              <br/>
              - Tends to do better when kept busy with activities
              <br/>
              <br/>
              <h4>Key Interests</h4>
              - Enjoys playing piano to cheer himself up
              <br/>
              - Likes to watch football and marvel movies
              <br/>
              - Seems very interested in ketchup
              <br/>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default PatientNotes;