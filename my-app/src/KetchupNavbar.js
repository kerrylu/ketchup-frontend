import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class KetchupNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // patient hub
    if (this.props.isLoggedIn == 'true') {
      return (
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="notifications">Notifications</Nav.Link>
            <Nav.Link href="patienthub">Patient Hub</Nav.Link>
            <Button onClick={this.props.changeLoginStatus}>Sign Out</Button>
          </Nav>
        </Navbar>
        );
    }
    // home
    else {
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
}

export default KetchupNavbar;