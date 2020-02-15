import React, { Component } from 'react';
import Postscreation from './Postscreation';
import Posts from './Posts'

class Generator extends Component {
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
        return (
            <div>
                <Postscreation
                change1={this.changeHandler1}
                change2={this.changeHandler2}
                />
                <Posts
                title={this.state.title}
                content={this.state.content}
                />
            </div>
        )
    }
}

export default Generator
