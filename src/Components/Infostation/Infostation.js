import React from "react";
import './infostation.css';

function Infostation() {
  return (
    <div>
      <h5>There is no posts on made by You</h5>
      <p  className='infoParagragh'>
        <a onClick= {event => window.location.href = "/login"}>
          <u>Log In</u>
        </a>{' '}
        and be our first story teller
      </p>
    </div>
  );
}

export default Infostation;
