import React from 'react'; 
import './App.css'; 



// importante esto 
const Tittle = 'El Manifiesto Comunista'; 
const author = 'Karl Marx y Friedrich Engels'
const img ='https://m.media-amazon.com/images/I/81aDxpFVw8L._AC_UF1000,1000_QL80_.jpg';

 

//Props

function Book(props){
return(

<article className='book'>
   <img src={img} alt='' width='50px' />
<h1>{Tittle}</h1>
<h4>{author}</h4>
<p>{props.job}</p>
</article>




)



}


export default Book
