import React from "react";
import "./App.css";
import Loginform  from './Components/Loginform/Login/Loginform';
import Infostation from './Components/Infostation/Infostation';
import Postscreation from './Components/Postcreation/Postscreation';
import PostsDone from './Components/Postcreation/PostsDone';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
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
          <Route exact path="/postcreation" component={Postscreation}></Route>
          <Route exact path='/login' component={Loginform}></Route>
          <Route exact path='/posts' component={PostsDone}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
