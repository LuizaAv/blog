import React, { Component } from "react";
import Loginform from "../Loginform/Login/Loginform";

class Verfication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  newName = name => {
    this.setState({
      name: name
    });
  };

  newPassword = password => {
    this.setState({
      password: password
    });
  };
  render() {
    return (
      <div>
        <Loginform
          nameChange={this.newName}
          passwordChange={this.newPassword}
          name={this.state.name}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default Verfication;
