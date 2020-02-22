import React, { Component } from "react";
import "./Loginform.css";

class Loginform extends Component {
    constructor(props){
        super(props)

    }

    namechangeHandler = (event) => {
      this.props.nameChange(event.target.value)
  }

  passwordchangeHandler = (event) => {
      this.props.passwordChange(event.target.value)
  }

  clickHandler = (event) => {
    alert(`${this.props.name} heloo`)
  }

  render() {
    return (
      <div className="loginMain">
        <h4>Log In</h4>
        <input 
        placeholder="Name ..." 
        value={this.props.name}
        onChange={this.namechangeHandler}
        />
        
        <input 
        placeholder="Password ..." 
        type="password"
        value={this.props.password}
        onChange={this.passwordchangeHandler}
         />
        
        <button 
        type="submit" 
        className="logSubmit"
        onClick = {this.clickHandler}>
          Log in
        </button>
      </div>
    );
  }
}

export default Loginform;
