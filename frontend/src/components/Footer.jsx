import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {/* Info Empresa */}
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ color: "#FFD700", fontSize: "1.5rem", marginBottom: "1rem" }}>
              Distribuciones Buga SAS
            </h3>
            <p style={{ color: "#ccc", lineHeight: "1.5" }}>
              Somos líderes en la distribución de bebidas alcohólicas y no alcohólicas en el Valle del Cauca,
              comprometidos con la calidad y el servicio excepcional.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <a href="https://instagram.com/distribucionesbugasas" style={{ color: "#ccc" }}><FaInstagram size={24} /></a>
              <a href="https://wa.me/573186544678" style={{ color: "#ccc" }}><FaWhatsapp size={24} /></a>
              <a href="distribucionesbugasas@hotmail.com" style={{ color: "#ccc" }}><FaEnvelope size={24} /></a>
            </div>
          </div>

          {/* Enlaces */}
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ color: "#FFD700", fontSize: "1.2rem", marginBottom: "1rem" }}>Enlaces Rápidos</h4>
            <ul style={{ listStyle: "none", padding: 0, color: "#ccc" }}>
              <li><Link to="/" style={linkStyle}>Inicio</Link></li>
              <li><Link to="/catalogo" style={linkStyle}>Catálogo</Link></li>
              <li><Link to="/contacto" style={linkStyle}>Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div style={{ flex: "1 1 250px" }}>
            <h4 style={{ color: "#FFD700", fontSize: "1.2rem", marginBottom: "1rem" }}>Contacto</h4>
            <p style={contactoStyle}><FaMapMarkerAlt style={iconStyle} /> Carrera 11 #8-19 Buga (V.)</p>
            <p style={contactoStyle}><FaPhoneAlt style={iconStyle} /> 318 654 4678</p>
            <p style={contactoStyle}><FaEnvelope style={iconStyle} /> info@distribucionesbuga.com</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #333", marginTop: "2rem", paddingTop: "1rem", textAlign: "center" }}>
          <p style={{ color: "#999" }}>&copy; 2024 Distribuciones Buga SAS. Todos los derechos reservados.</p>
          <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD - PROHÍBASE EL EXPENDIO A MENORES DE EDAD
          </p>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  display: "block",
  marginBottom: "0.5rem",
  color: "#ccc",
  textDecoration: "none",
  transition: "color 0.3s",
};

const contactoStyle = {
  color: "#ccc",
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const iconStyle = {
  marginRight: "0.5rem",
};

export default Footer;
