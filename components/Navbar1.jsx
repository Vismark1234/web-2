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
            <a href="/web-2/">Inicio</a>
          </li>
          <li>
            <Link to="/menu">Menu</a>
          </li>
          <li>
            <a href="/web-2/reservas">Reservas</a>
          </li>
          <li>
            <a href="/web-2/ubicacion">Ubicacion</a>
          </li>
          <li className="dropdown">
            <a href="/web-2/galeria">Galeria</a>
            <ul className="dropdown-menu">
              <li><a href="#subopcion1">Subopción 1</a></li>
              <li><a href="#subopcion2">Subopción 2</a></li>
              <li><a href="#subopcion3">Subopción 3</a></li>
            </ul>
          </li>
          <li>
            <a href="/web-2/nosotros">Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
