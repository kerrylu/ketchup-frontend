// pages/PatientNotes.js

import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Col, Button, Textarea } from "react-bootstrap";



class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      // ** Initialize "text" property with empty string here
      text: "-Seems very interested in ketchup"
    }
  }
  edit = () => {
    this.setState({editing: true})
  }
  save = () => {
    var val = this.refs.newText.value;
    alert(val)
    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: val,
      editing: false
    })
  }
  renderNormal = () => {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return (
      <View style={{height: 400}} >
        <ScrollView>
          <Text>
            <Col>
              <h3 className="mt-5">Notes</h3>
              <h1>{this.props.patient.name}</h1>
            </Col>
            <div>
              <p>{this.state.text}</p>
              <Button onClick={this.edit}>Edit</Button>
            </div>
          </Text>
        </ScrollView>
      </View>
    )
  }
  renderForm = () => {
    return (
      <View style={{height: 400}} >
        <ScrollView>
          <Text>
            <Col>
              <h3 className="mt-5">Notes</h3>
              <h1>{this.props.patient.name}</h1>
            </Col>
            <div>
              <textarea ref="newText" defaultValue={this.state.text} rows="10" cols="100"></textarea>
              <Button onClick={this.save}>Save</Button>
            </div>
          </Text>
        </ScrollView>
      </View>
    )
  }

  render() {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  }
}

export default PatientNotes;