import React from 'react'; 
import './App.css'; 

// importante esto 

function Book(props) {
  return (
    <article className='book'>
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}

export default Book;
