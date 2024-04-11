import React from 'react'; 
import './App.css'; 
import Book from './book';

import { books } from './books'; 
import { greeting } from './testing/testing';

function App() {
  console.log(greeting)
  return (
    <section className='booklist'>
       {books.map((book, index) => (
        <Book 
          key={book.id}
          img={book.img}
          Title={book.Title} 
          author={book.author} 
        />
      ))}
    </section>
  );
}

export default App;
