import React from "react";
import noticiasData from "../data/noticias.json";
import BackButton from "../components/BackButton";

export default function Noticias() {
  return (
    <div
      className="container py-5 text-center position-relative"
      style={{ minHeight: "100vh" }}
    >
      {/* 🔙 BOTÓN VOLVER ATRÁS */}
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <BackButton />
      </div>

      <h2 className="text-rosa mb-4 fw-bold">Noticias</h2>

      {noticiasData.map((n, index) => (
        <div
          key={index}
          className="news-card p-3 mb-3 shadow-sm border rounded-3 bg-white"
        >
          <h4 className="text-rosa">{n.titulo}</h4>
          <small className="text-muted">{n.fecha}</small>
          <p className="mt-2">{n.contenido}</p>
        </div>
      ))}
    </div>
  );
}
