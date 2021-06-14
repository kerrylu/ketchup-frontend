// pages/Profile/Profile.js

import React from "react";
import logo from '../../newLogo.jpeg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Profile Page</h1>
        <div>
          <img src={logo}/>
          <div>Hi</div>
        </div>
      </div>
    );
  }
}

export default Profile;