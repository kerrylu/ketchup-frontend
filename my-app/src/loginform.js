import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit = (event) => {
    var data = { email: this.state.email, password: this.state.password}
    // debug
    console.log('A form was submitted: ');
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
      <Form className="LoginForm" id="loginForm">
        <FormGroup controlId="formEmail">
          <FormControl type="email" placeholder="Email Address" value={this.state.email} name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="formPassword">
          <FormControl type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="formSubmit">
          <Button type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default LoginForm;