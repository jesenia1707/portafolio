import React from "react";
import ProjectCard from "../components/ProjectCard";
import BackButton from "../components/BackButton";

import bioImg from "../assets/bioacp.png"; // portada BioACP
import perfulandiaImg from "../assets/perfulandia.png"; // portada Perfulandia
import splashImg from "../assets/piscina.png"; // portada Piscina Splash

const proyectos = [
  {
    id: 1,
    img: bioImg,
    title: "BioACP",
    description:
      "Proyecto enfocado en optimizar el acceso al metro mediante tecnología biométrica, reduciendo tiempos de espera y mejorando la seguridad.",
    tech: "React · UX/UI · Ciberseguridad",
    link: "/files/BioACP.pptx",
  },
  {
    id: 2,
    img: perfulandiaImg,
    title: "Perfulandia SPA",
    description:
      "Sistema de gestión basado en microservicios con Spring Boot, Maven y JPA. Proyecto final sobre transformación digital empresarial.",
    tech: "Spring Boot · Maven · JPA · REST",
    link: "/files/Presentacion_Perfulandia_Final_Con_Imagenes.pptx",
  },
  {
    id: 3,
    img: splashImg,
    title: "Piscina Splash",
    description:
      "Tienda digital para la venta y gestión de productos de piscinas, con un carrito de compras y diseño adaptable.",
    tech: "React · Bootstrap · LocalStorage",
    link: "/files/piscina splash.pptx",
  },
];

export default function Proyectos() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#fff5f8", minHeight: "100vh" }}
    >
      {/* 🔙 BOTÓN VOLVER ATRÁS */}
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <BackButton />
      </div>

      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#c2185b" }}>
          Proyectos Realizados
        </h2>

        <div className="row g-4">
          {proyectos.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: "15px" }}
              >
                <img
                  src={p.img}
                  className="card-img-top"
                  alt={p.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold text-rosa">{p.title}</h5>
                  <p>{p.description}</p>
                  <p>
                    <strong>Tecnologías:</strong> {p.tech}
                  </p>
                  <a
                    href={p.link}
                    className="btn btn-rosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#c2185b",
                      borderColor: "#ad1457",
                      color: "white",
                    }}
                  >
                    Abrir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
