import React from 'react';
import './posts.css';

function Posts(props) {
    return (
        <div className='postCard'>
          <div className='circle'>L</div>
          <p>{props.title}</p>  
          <p>{props.content}</p>
        </div>
    )
}


export default Posts