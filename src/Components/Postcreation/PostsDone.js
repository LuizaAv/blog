import React from 'react';
import './posts.css';

function Posts(props) {
    return (
      <div>
        {props.posts.map( (post , index) =>{
          return(
            <div className='postCard' key={index}>
              <div className='circle'>L</div>  
              <p>{post.postValue}</p>
            </div>
          )
          
        })}
      </div>
        
    )
}


export default Posts