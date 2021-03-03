import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class KetchupNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  changeLoginStatus = () => {
    this.props.changeLoginStatus();
  }
  handleSignout = () => {
    this.changeLoginStatus()
  }

  render() {
    console.log(this.props.isLoggedIn)
    // patient hub
    if (this.props.isLoggedIn) {
      return (
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="patienthub">PatientHub</Nav.Link>
            <Nav.Link href="notifications">Notifications</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Button onClick={this.handleSignout}>Sign Out</Button>
          </Nav>
        </Navbar>
        );
    }
    // home
    else {
      return (
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
            <Nav.Link href="login">Sign in</Nav.Link>
          </Nav>
        </Navbar>
        );
    }
  }
}

export default KetchupNavbar;