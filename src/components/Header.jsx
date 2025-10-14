import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-rosa" href="#">
          🌸 Jesenia Pardo Díaz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-rosa" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-rosa" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-rosa" href="#noticias">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-rosa" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

