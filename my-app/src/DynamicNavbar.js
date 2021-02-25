import React from "react";
import KetchupNavbar from './navbar/KetchupNavbar'
import TherapistNavbar from "./navbar/TherapistNavbar";

class DynamicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // patient hub
    if (this.props.isLoggedIn) {
      return (<TherapistNavbar></TherapistNavbar>);
    }
    // home
    else {
      return (<KetchupNavbar></KetchupNavbar>);
    }
  }
}

export default DynamicNavbar;