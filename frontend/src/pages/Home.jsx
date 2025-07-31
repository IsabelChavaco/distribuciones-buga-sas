import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-overlay">
        <Carousel />

        <section style={{ padding: "2rem", backgroundColor: "rgba(255,255,255,0.9)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>¿Quiénes somos?</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div style={{ flex: "1 1 100px", maxWidth: "700px", textAlign: "justify" }}>
              <p>
                Somos <strong>Distribuciones Buga SAS</strong>, una empresa especializada en la distribución de bebidas alcohólicas y no alcohólicas,
                con sede en <strong>Guadalajara de Buga, Colombia</strong>, con más de <strong>15 años de experiencia</strong> en el mercado colombiano.
              </p>
              <p>
                Nos especializamos en la distribución de <strong>cervezas, licores, gaseosas, agua, pony malta y cigarrillos</strong>,
                trabajando con las marcas más reconocidas del país.
              </p>
              <p>
                Nos caracterizamos por nuestra <strong>responsabilidad, calidad y excelente atención al cliente</strong>.
              </p>
            </div>

            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <img src={logo} alt="Logo Distribuciones Buga SAS" style={{ maxWidth: "250px", height: "auto" }} />
            </div>
          </div>
        </section>

        <section style={{ padding: "2rem", backgroundColor: "rgba(249,249,249,0.95)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Nuestras Marcas Aliadas</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {[
              "Bavaria", "Coca Cola", "Postobón", "Aguardiente del Valle", "Ron Viejo de Caldas",
              "Agua MIA", "Coltabaco", "Whisky Diageo", "Cigarrillos BAT", "QUALA",
              "Pony Malta", "Agua BRISA", "Bonfiest y Sal de Frutas", "Electrolit",
              "Tequila Jimador", "Smirnoff",
            ].map((marca, index) => (
              <div
                key={index}
                style={{
                  padding: "1rem",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#222",
                  width: "100%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {marca}
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "1rem", textAlign: "center", backgroundColor: "rgba(255,255,255,0.85)" }}>
          <p>Contamos con el respaldo de las marcas más reconocidas del mercado.</p>
        </section>

        <section style={{ padding: "2rem", backgroundColor: "#222", textAlign: "center" }}>
        <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Haz tu pedido ahora por WhatsApp o llámanos</h3>
        <a href="https://wa.me/573186544678" target="_blank" rel="noopener noreferrer">
          <button style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "background 0.3s"
          }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00913aff")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
          >
            Contactar por WhatsApp
          </button>
        </a>
      </section>

        <section style={{ padding: "1rem", backgroundColor: "#ffdada", textAlign: "center" }}>
          <p><strong>ADVERTENCIA:</strong> El exceso de alcohol es perjudicial para la salud. Prohíbase el expendio de bebidas embriagantes a menores de edad.</p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
