import React, { useState, useEffect, useRef } from "react";
import carrusel0 from "../assets/carrusel0.jpg";
import carrusel4 from "../assets/carrusel4.jpg";

const imagenes = [
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    title: "Distribuciones Buga SAS",
    subtitle: "Tu distribuidor de confianza",
  },
  {
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    title: "Amplio Catálogo",
    subtitle: "Cervezas, licores, gaseosas y más",
  },
  {
    image: carrusel0,
    title: "Precios Competitivos",
    subtitle: "Ofertas todo el año",
  },
  {
    image: carrusel4,
    title: "Atención Personalizada",
    subtitle: "Estamos para servirte",
  },
];

const Carousel = () => {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div style={{ display: "flex", animation: "carrusel 40s infinite" }}>
        {imagenes.map((img, index) => (
          <div key={index} style={{ position: "relative", minWidth: "100%" }}>
            <img
              src={img.image}
              alt={img.title}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "1rem",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h2 style={{ margin: 0 }}>{img.title}</h2>
              <p style={{ margin: 0 }}>{img.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animación CSS */}
      <style>
        {`
          @keyframes carrusel {
            0% { transform: translateX(0); }
            25% { transform: translateX(-100%); }
            50% { transform: translateX(-200%); }
            75% { transform: translateX(-300%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      
    </div>
  );
};

export default Carousel;

