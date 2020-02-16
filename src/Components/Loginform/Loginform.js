import React, { Component } from 'react'
import './Loginform.css';
class Loginform extends Component {

    render() {
        return (
            <div className='loginMain'>
                <h4>Log In</h4>
                <input placeholder='Name ...'/>
                <input placeholder='Password ...' type='password'/>
                <button type='submit' className='logSubmit'>Log in</button>
            </div>
        )
    }
}


export default  Loginform