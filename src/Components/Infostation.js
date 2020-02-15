import React from "react";
import "../App.css";

function Infostation() {
    return (
        <div>
            <h5 className='infoPage'>There's no posts made by you</h5>
            <p className='infoParagragh'>
                <a onClick={event => (window.location.href = "/postcreation")}>
                    <u>Log In</u>
                </a> and be  our first story teller
            </p>
        </div>
    )
}

export default  Infostation