import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/home.css'
import noticiasData from './assets/noticias.json'

function App() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    setNoticias(noticiasData)
  }, [])

  return (
    <div className="app-container text-center">
      <Header />

      {/* Sección de Introducción */}
      <section className="intro-section py-5">
        <img
          src="/vite.svg" // aquí puedes reemplazar con tu foto real dentro de /src/assets
          alt="Jesenia Pardo Díaz"
          className="rounded-circle mb-3 perfil-img"
          width="150"
        />
        <h1 className="fw-bold text-rosa">Jesenia Pardo Díaz</h1>
        <p className="bio-text">
          Soy estudiante de Ingeniería en Informática en Duoc UC, apasionada por el desarrollo web,
          la tecnología y la innovación digital. Me encanta aprender y crear soluciones que mezclen
          creatividad con funcionalidad.
        </p>

        <div className="social-links mt-3">
          <a href="https://www.facebook.com/jessy.diaz.52493" className="btn btn-rosa mx-2" target="_blank">
            Facebook
          </a>
          <a href="https://github.com/jesenia1707" className="btn btn-rosa mx-2" target="_blank">
            GitHub
          </a>
        </div>
      </section>

      {/* 🌸 Sección de Proyectos */}
      <section className="projects-section py-5">
        <h2 className="text-rosa mb-4">Mis Proyectos</h2>
        <div className="container">
          <div className="row g-4">
            {[1, 2, 3].map((p) => (
              <div className="col-md-4" key={p}>
                <div className="card project-card h-100">
                  <img
                    src={`https://via.placeholder.com/300x200?text=Proyecto+${p}`}
                    className="card-img-top"
                    alt={`Proyecto ${p}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-rosa">Proyecto {p}</h5>
                    <p className="card-text">
                      Breve descripción del proyecto {p}. Explica su objetivo o funcionalidad
                      principal de forma sencilla y atractiva.
                    </p>
                    <p><strong>Tecnologías:</strong> React, CSS, JavaScript</p>
                    <a href="#" className="btn btn-rosa">Ver más</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Noticias */}
      <section className="news-section py-5">
        <h2 className="text-rosa mb-4">Noticias</h2>
        <div className="container">
          {noticias.map((n, index) => (
            <div key={index} className="news-card p-3 mb-3">
              <h4 className="text-rosa">{n.titulo}</h4>
              <small className="text-muted">{n.fecha}</small>
              <p>{n.contenido}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App


