import React, { Component } from 'react'
import './posts.css'

class Postscreation extends Component {
    constructor(props){
        super(props)
    }
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
                  onChange={this.props.change1}
                ></textarea>
                <textarea
                  className="text"
                  placeholder="Content *"
                  onFocus={event =>
                    (event.target.placeholder = `Content  
                    ....Write your post`)
                  }
                  onChange={this.props.change2}
                  onBlur={event => (event.target.placeholder = "Content *")}
                ></textarea>
                <i
                  className="fa fa-check-square"
                  style={checkBox}
                  onClick={event => (window.location.href = '/posts')}
                ></i>
                <button className='logOut'>Log Out</button>
              </div>
            );
    }
}

export default Postscreation