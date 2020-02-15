import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Infostation from "./Components/Infostation";
import {PostCreation} from "./Components/PostCreation";
import Posts from './Components/Posts';

function App(props) {
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
            <Link to="/Login" className="navbarLi">Log In</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Infostation}></Route>
          <Route path="/postcreation" component={PostCreation}></Route>
          <Route path='/posts'>
            <Posts/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
