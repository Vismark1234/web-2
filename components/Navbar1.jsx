import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link para navegación interna
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservas">Reservas</Link>
          </li>
          <li>
            <Link to="/ubicacion">Ubicacion</Link>
          </li>
          <li className="dropdown">
            <Link to="/galeria">Galeria</Link>
            <ul className="dropdown-menu">
              <li><Link to="#subopcion1">Subopción 1</Link></li>
              <li><Link to="#subopcion2">Subopción 2</Link></li>
              <li><Link to="#subopcion3">Subopción 3</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
