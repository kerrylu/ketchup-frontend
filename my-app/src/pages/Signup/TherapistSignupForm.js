import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class TherapistSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassowrd: '',
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    var data = { email: this.state.email, password: this.state.password}
    // debug
    console.log('A signup form was submitted: ');
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(JSON.stringify(data))

    fetch('https://httpbin.org/post', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify((this.state.email, this.state.password))
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
  }

  render() {
    return (
      <Form className="SignupForm" id="signupForm">
        <FormGroup controlId="formEmail">
          <FormControl type="email" placeholder="Email Address" value={this.state.email} name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="formPassword">
          <FormControl type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="formPassword">
          <FormControl type="password" placeholder="Confirm Password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="formSubmit">
          <Button type="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default TherapistSignupForm;