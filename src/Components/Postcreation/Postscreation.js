import React, { Component } from "react";
import "./posts.css";

class Postscreation extends Component {
  constructor(props) {
    super(props);
  }

  titleChange = event => {
    this.props.titleChangeHandler(event.target.value);
  };

  contentChange = event => {
    this.props.contentChangeHandler(event.target.value);
  };

  render() {
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
          onChange={this.titleChange}
        ></textarea>
        <textarea
          className="text"
          placeholder="Content *"
          onFocus={event =>
            (event.target.placeholder = `Content  
                    ....Write your post`)
          }
          onBlur={event => (event.target.placeholder = "Content *")}
          onChange={this.contentChange}
        ></textarea>
      </div>
    );
  }
}

export default Postscreation;
