import React from 'react'; 
import './App.css'; 
import Book from './book';

const books= [
{
  id: '1',
  img: 'https://m.media-amazon.com/images/I/81aDxpFVw8L._AC_UF1000,1000_QL80_.jpg',
  Title: 'El Manifiesto Comunista', 
  author: 'Karl Marx y Friedrich Engels'
},

 {
  id: '2',
  img: 'https://books.google.pt/books/publisher/content?id=nwJgEAAAQBAJ&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U26KbejCbCJv-4pszlMW3Cjn4AUAg&w=1280',
  Title: 'El Estado y la Revolución', 
  author: 'Vladimir Lenin'
},

{
  id: '3',
  img: 'https://m.media-amazon.com/images/I/71qHGvQQJSL._AC_UF1000,1000_QL80_.jpg',
  Title: 'El Capital', 
  author: 'Karl Marx'
},


];



function App() {
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
