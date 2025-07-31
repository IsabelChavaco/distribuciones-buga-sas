import React from "react";
import { MapPin, Smartphone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // nuevo icono
import Footer from "./Footer";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "3rem 1rem", color: "#000" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
          Contáctanos
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Información de Contacto
            </h2>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
              <MapPin color="#cc0000" style={{ marginRight: "1rem" }} />
              <div>
                <strong>Dirección:</strong>
                <p>Carrera 11 #8-19, Buga, Valle del Cauca</p>
              </div>
            </div>

            <a
              href="https://wa.me/573186544678"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem", textDecoration: "none", color: "inherit" }}
            >
              <FaWhatsapp color="#25D366" size={24} style={{ marginRight: "1rem" }} />
              <div>
              <strong>WhatsApp:</strong>
              <p>318 654 4678</p>
              </div>
            </a>


            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
              <Smartphone color="#cc0000" style={{ marginRight: "1rem" }} />
              <div>
                <strong>Celular:</strong>
                <p>+57 3186544678</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
              <Mail color="#cc0000" style={{ marginRight: "1rem" }} />
              <div>
                <strong>Email:</strong>
                <p>info@distribucionesbuga.com</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
              <Clock color="#cc0000" style={{ marginRight: "1rem" }} />
              <div>
                <strong>Horarios de Atención:</strong>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 8:450 AM - 6:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Mapa de Google */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Ubicación
            </h2>

            <div style={{ borderRadius: "10px", overflow: "hidden", border: "2px solid #ccc", height: "350px" }}>
              <iframe
                title="Ubicación Distribuciones Buga"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.771162760384!2d-76.3002342258043!3d3.8999609961300177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3877e00b6ad10f%3A0x7a3c1c0b51ef9356!2sCra.%2011%20%238-19%2C%20Guadalajara%20de%20Buga%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1690465147286!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div style={{ marginTop: "1rem", backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "10px" }}>
              <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>¿Cómo llegar?</h4>
              <p>
                Ubicados en el centro de Buga, a 4 cuadras del parque principal. 
                Enseguida de la ferretería Superior, somos el famosos local de las cortinas Amarillas.
                Fácil acceso en transporte público y particular.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: "1px solid #333", marginTop: "2rem", paddingTop: "1rem", textAlign: "center" }}>
          <p style={{ color: "#999" }}>&copy; 2024 Distribuciones Buga SAS. Todos los derechos reservados.</p>
          <p style={{ color: "#777", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD - PROHÍBASE EL EXPENDIO A MENORES DE EDAD
          </p>
        </div>
    </div>
  );
};

export default Contact;
