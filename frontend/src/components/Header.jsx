import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Logo con redirección al hacer clic */}
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: "70px", cursor: "pointer" }} />
        </Link>
        <h1>Bienvenidos a Distribuciones Buga SAS</h1>
      </div>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/contacto">Contáctanos</Link>
      </nav>
    </header>
  );
};

export default Header;

