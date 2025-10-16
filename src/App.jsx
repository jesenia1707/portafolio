import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Noticias from "./pages/Noticias";
import Contact from "./pages/Contact";

import "./css/home.css";
import jeseniaImg from "./assets/jesenia.png";
import noticiasData from "./assets/noticias.json";

import { FaFacebook, FaGithub } from "react-icons/fa";

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData);
  }, []);

  return (
    <Router>
      <div className="app-container text-center">
        <Header />

        {/* 🌸 RUTAS */}
        <Routes>
          {/* 🏠 Página principal */}
          <Route
            path="/"
            element={
              <>
                {/* 🌸 Sección de Introducción */}
                <section className="intro-section py-5" style={{ backgroundColor: "#fff5f8" }}>
                  <img
                    src={jeseniaImg}
                    alt="Jesenia Pardo Díaz"
                    className="rounded-circle mb-3 perfil-img shadow-lg"
                    width="200"
                    style={{
                      border: "5px solid #ff80b3",
                      objectFit: "cover",
                      height: "200px",
                    }}
                  />
                  <h1 className="fw-bold text-rosa mt-3">Jesenia Pardo Díaz</h1>
                  <p className="bio-text mt-3" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    Soy estudiante de Ingeniería en Informática en Duoc UC, apasionada por el
                    desarrollo web, la tecnología y la innovación digital. Me encanta aprender y
                    crear soluciones que mezclen creatividad con funcionalidad.
                  </p>

                  {/* 🌷 Íconos de redes sociales */}
                  <div className="social-links d-flex justify-content-center gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/jessy.diaz.52493"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4267B2", fontSize: "2.2rem" }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://github.com/jesenia1707"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#333", fontSize: "2.2rem" }}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </section>

                {/* 🌸 Sección de Proyectos */}
                <section className="projects-section py-5" style={{ backgroundColor: "#ffe6f0" }}>
                  <h2 className="text-rosa mb-4">Mis Proyectos</h2>
                  <div className="container">
                    <div className="row g-4">
                      {[1, 2, 3].map((p) => (
                        <div className="col-md-4" key={p}>
                          <div className="card project-card h-100 shadow-sm">
                            <img
                              src={`https://via.placeholder.com/300x200?text=Proyecto+${p}`}
                              className="card-img-top"
                              alt={`Proyecto ${p}`}
                            />
                            <div className="card-body">
                              <h5 className="card-title text-rosa">Proyecto {p}</h5>
                              <p className="card-text">
                                Breve descripción del proyecto {p}. Explica su objetivo o
                                funcionalidad principal de forma sencilla y atractiva.
                              </p>
                              <p>
                                <strong>Tecnologías:</strong> React, CSS, JavaScript
                              </p>
                              <a href="#" className="btn btn-rosa">
                                Ver más
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 🌸 Sección de Noticias */}
                <section className="news-section py-5" style={{ backgroundColor: "#fff5f8" }}>
                  <h2 className="text-rosa mb-4">Noticias</h2>
                  <div className="container">
                    {noticias.map((n, index) => (
                      <div key={index} className="news-card p-3 mb-3 shadow-sm">
                        <h4 className="text-rosa">{n.titulo}</h4>
                        <small className="text-muted">{n.fecha}</small>
                        <p>{n.contenido}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            }
          />

          {/* 💻 Página de Proyectos */}
          <Route path="/proyectos" element={<Proyectos />} />

          {/* 📰 Página de Noticias */}
          <Route path="/noticias" element={<Noticias />} />

          {/* 📩 Página de Contacto */}
          <Route path="/contacto" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
