import React from "react";
import "./App.css";
import Loginform  from './Components/Loginform/Login/Loginform';
import Infostation from './Components/Infostation/Infostation';
import Postscreation from './Components/Postcreation/Postscreation';
import PostsDone from './Components/Postcreation/PostsDone';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      posts : [], 
    }
  }

  pushPostToPosts = (post) =>{
     this.setState(({posts})=>({
       posts : [...posts , post]
     }))
  }

  render(){
    console.log(this.state.posts)
  return (
    <Router>
      <div>
      <ul className="navBar">
          <li>
            <Link to="/" className="navbarLi">Blog</Link>
          </li>

          <li>
            <Link to="/postcreation" className="navbarLi">Create your post</Link>
          </li>

          <li>
            <Link to="/login" className="navbarLi">Log In</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Infostation}></Route>
          <Route exact path="/postcreation">
            <Postscreation pushPostToPosts={this.pushPostToPosts}/>
          </Route>
          <Route exact path='/login' component={Loginform}></Route>
          <Route exact path='/posts'>
            <PostsDone posts={this.state.posts}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
