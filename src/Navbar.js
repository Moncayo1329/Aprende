import React from "react"
import './App.css'; 

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#" className="active">Inicio</a>
      <a href="#news">Articulos</a>
      <a href="#contact">Sobre</a>
    </div>
  );
}

export default Navbar;
