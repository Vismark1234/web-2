import React, { useState } from "react";
import "./navbar1.css"; // Archivo de estilos externo

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <ul className="navbar-menu" onClick={(e) => e.stopPropagation()}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservas">Reservas</a>
          </li>
          <li>
            <a href="/ubicacion">Ubicacion</a>
          </li>
          <li className="dropdown">
            <a href="/galeria">Galeria</a>
            <ul className="dropdown-menu">
              <li><a href="#subopcion1">Subopción 1</a></li>
              <li><a href="#subopcion2">Subopción 2</a></li>
              <li><a href="#subopcion3">Subopción 3</a></li>
            </ul>
          </li>
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
