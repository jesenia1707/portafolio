import React from "react";
import noticiasData from "../data/noticias.json";

export default function Noticias() {
  return (
    <div className="container py-5 text-center">
      <h2 className="text-rosa mb-4 fw-bold">Noticias</h2>

      {noticiasData.map((n, index) => (
        <div key={index} className="news-card p-3 mb-3 shadow-sm border rounded-3 bg-white">
          <h4 className="text-rosa">{n.titulo}</h4>
          <small className="text-muted">{n.fecha}</small>
          <p className="mt-2">{n.contenido}</p>
        </div>
      ))}
    </div>
  );
}
