import React from 'react'; 
import './App.css'; 
import Book from './book';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81aDxpFVw8L._AC_UF1000,1000_QL80_.jpg',
  Title: 'El Manifiesto Comunista', 
  author: 'Karl Marx y Friedrich Engels'
};

const secondBook = {
  img: 'https://books.google.pt/books/publisher/content?id=nwJgEAAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U26KbejCbCJv-4pszlMW3Cjn4AUAg&w=1280',
  Title: 'El Estado y la Revolución', 
  author: 'Vladimir Lenin'
};





function App() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} Title={firstBook.Title} author={firstBook.author} />
      <Book img={secondBook.img} Title={secondBook.Title} author={secondBook.author} />
    </section>
  );
}

export default App;
