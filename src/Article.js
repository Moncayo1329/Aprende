import React from 'react';
import './App.css'; 

// importante esto 
// onClick , onMouseOver 



function Article(props) { 
  return (
    <article className='Articulo'>
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1>
      <h4 style={{color:'#617d98' , fontSize: '0.75rem', 
    marginTop: '0.25rem'}}>{props.author}</h4>
    </article>
  );
}

export default Article;
