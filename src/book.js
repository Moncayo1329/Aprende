import React from 'react'; 
import Image from './Image';
import Tittle from './Tittle';
import { Author } from './Author';
import './App.css'; 



function Book(){
return(

<article className='book'>
    <Image />
  <Tittle /> 
  <Author />
</article>




)



}


export default Book
