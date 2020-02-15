import React, { Component } from "react";
import "../App.css";
import Posts from './Posts'

class PostCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  changeHandler1 = event => {
    this.setState({
      title: event.target.value
    });
  };

  changeHandler2 = event => {
    this.setState({
      content: event.target.value
    });
  };

  render() {
    console.log(this.state);
    const checkBox = {
      fontSize: "25px",
      color: "rgb(1, 48, 13)"
    };
    return (
      <div className="postsContent">
        <h5>Tell us your story</h5>
        <textarea
          className="text"
          placeholder="Title *"
          onFocus={event =>
            (event.target.placeholder = `Title
          ....`)
          }
          onBlur={event => (event.target.placeholder = "Title *")}
          onChange={this.changeHandler1}
        ></textarea>
        <textarea
          className="text"
          placeholder="Content *"
          onFocus={event =>
            (event.target.placeholder = `Content  
            ....Write your post`)
          }
          onChange={this.changeHandler2}
          onBlur={event => (event.target.placeholder = "Content *")}
        ></textarea>
        <i
          className="fa fa-check-square"
          style={checkBox}
          onClick={event => (window.location.href = '/posts')}
        ></i>
        <Posts title={this.state.title}/>
      </div>
    );
  }
}

export { PostCreation };
