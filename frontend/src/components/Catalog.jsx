import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalog = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProductos(res.data))
      .catch(err => console.error("❌ Error al obtener productos:", err));
  }, []);

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const abrirImagen = (src) => setImagenSeleccionada(src);
  const cerrarImagen = () => setImagenSeleccionada(null);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fefefe", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#b8860b" }}>Catálogo de Productos</h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: "0.75rem",
          marginBottom: "2rem",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {filtrados.map(producto => (
          <div
            key={producto._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
          >
            <img
              src={`/assets/${producto.imagen}`}
              alt={producto.nombre}
              onClick={() => abrirImagen(`/assets/${producto.imagen}`)}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "0.5rem"
              }}
            />
            <h4 style={{ margin: "0.5rem 0", color: "#222" }}>{producto.nombre}</h4>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{producto.descripcion}</p>
            <p style={{ fontWeight: "bold", color: "#b8860b", marginTop: "0.5rem" }}>${producto.precio}</p>
          </div>
        ))}
      </div>

      {/* Modal para imagen en grande */}
      {imagenSeleccionada && (
        <div
          onClick={cerrarImagen}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <img
            src={imagenSeleccionada}
            alt="Vista previa"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Catalog;
