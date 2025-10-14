import React from 'react'
import NewsList from '../components/NewsList'

export default function Contact(){
  return (
    <>
      <section id="contact" className="py-4">
        <div className="card card-custom p-3">
          <h3>Contacto</h3>
          <p>Correo: <strong>jesenia.pardo@example.cl</strong></p>
          <p>GitHub: <a href="https://github.com/jesenia1707" target="_blank" rel="noreferrer">jesenia1707</a></p>
        </div>
      </section>

      {/* Noticias (2 noticias cargadas dinámicamente) */}
      <NewsList />
    </>
  )
}
