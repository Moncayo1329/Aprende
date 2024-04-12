import React from 'react'; 
import './App.css'; 
import Book from './book';
import { books } from './books'; 
import Navbar from './Navbar';

function App() {
  return (
 <div>
    <Navbar />
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
    </div>
  );
}

export default App;
