import React, { Component } from "react";
import PostsDone from "./PostsDone";
import Postscreation from "./Postscreation";

class PostsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      date: new Date()
    };
  }

  changeTitle = title => {
    this.setState({
      title: title
    });
  };

  changeContent = content => {
    tihs.setState({
      content: content
    });
  };

  render() {
    return (
      <div>
        <Postscreation
          titleChangeHandler={this.changeTitle}
          contentChangeHandler={this.changeContent}
        />
      </div>
    );
  }
}

export default PostsData;
