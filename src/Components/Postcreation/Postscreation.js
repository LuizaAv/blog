import React, { Component } from "react";
import "./posts.css";
import { withRouter } from 'react-router-dom'

class Postscreation extends Component {
  constructor(props) {
    super(props);
    this.state={
      post : {}
    }
  }

  handlePostValue = (e) =>{
     this.setState({
       post : {postValue : e.target.value}
     })
  }

  goToPosts = () =>{
     this.props.pushPostToPosts(this.state.post)
     this.props.history.push('/posts')
  }

  render() {
    //console.log('post', this.state.post)
    const checkBox = {
      fontSize: "25px",
      color: "rgb(1, 48, 13)"
    };
    return (
      <div className="postsContent">
        <h5>Tell us your story</h5>

        <textarea
          className="text"
          placeholder="Content *"
          onFocus={event =>
            (event.target.placeholder = `Content  
                    ....Write your post`)
          }
          onBlur={event => (event.target.placeholder = "Content *")}
          onChange={this.handlePostValue}
        ></textarea>
        <button 
           className='submitBtn'
           onClick={this.goToPosts}>Submit</button>
      </div>
    );
  }
}

export default withRouter(Postscreation);
