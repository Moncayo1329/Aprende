import React from "react";
import Navbar from "./Navbar";
import { Articulos } from './Articulos'; // Importamos el arreglo de datos
import './App.css'; 
import Article from "./Article";

function Articulo() {
  return (
    <div>
      <Navbar />
      <section className='Articulolist'>
        {Articulos.map((articulo, index) => ( // Cambia Article por articulo
          <Article  
            key={articulo} // Cambia Article por articulo
            img={articulo.img}
            Title={articulo.Title}
            author={articulo.author} // Cambia book por author
          />
        ))}
      </section>
    </div>
  );
}

export default Articulo;

