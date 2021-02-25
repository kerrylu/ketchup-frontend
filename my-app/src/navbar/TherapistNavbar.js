import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from '../logo.jpeg'

class TherapistNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="contactus">Contact Us</Nav.Link>
        <Nav.Link href="profile">Profile</Nav.Link>
        <Nav.Link href="">Sign Out</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
    );
  }
}

export default TherapistNavbar;