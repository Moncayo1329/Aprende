import React from 'react';
import './App.css'; 

// importante esto 
// onClick , onMouseOver 

const clickHandler = () => {

alert('hello world');
};

function Book(props) { 
  return (
    <article className='book'>
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1>
      <h4>{props.author}</h4>
      <button type='button' onClick={clickHandler}> example</button>
    </article>
  );
}

export default Book;
