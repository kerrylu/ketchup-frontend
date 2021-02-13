import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class KetchupNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="home">Ketchup</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="profile">Profile</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
    );
  }
}

export default KetchupNavbar;