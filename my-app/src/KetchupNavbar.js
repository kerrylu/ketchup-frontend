import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from './logo.jpeg'

class KetchupNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="contactus">Contact Us</Nav.Link>
        <Nav.Link href="profile">Profile</Nav.Link>
        <Nav.Link href="login">Sign in</Nav.Link>
      </Nav>
    </Navbar>
    );
  }
}

export default KetchupNavbar;