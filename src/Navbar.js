import React from "react";
import './App.css'; 
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <ul>
        <li><Link to="/" className="active">Inicio</Link></li>
        <li><Link to="/Articulo">Articulos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

