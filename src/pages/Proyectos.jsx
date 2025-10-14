import React from 'react'
import ProjectCard from '../components/ProjectCard'
import proyectoImg from '../assets/profile.jpg' // sustituye por miniaturas reales si quieres

const proyectos = [
  {
    id:1,
    img: proyectoImg,
    title: 'AquaShop',
    description: 'Tienda simple de productos para piscinas con filtros y carrito de compras.',
    tech: 'React · CSS · LocalStorage',
    link: 'https://github.com/jesenia1707/AquaShop'
  },
  {
    id:2,
    img: proyectoImg,
    title: 'Splash Manager',
    description: 'App para agendar mantenciones y registrar clientes y equipos.',
    tech: 'React · Bootstrap · JSON',
    link: '#'
  },
  {
    id:3,
    img: proyectoImg,
    title: 'Piscinas Map',
    description: 'Mapa interactivo con servicios y proveedores cerca de ti.',
    tech: 'React · APIs · Leaflet',
    link: '#'
  }
]

export default function Proyectos(){
  return (
    <section id="projects" className="py-4">
      <h2 className="mb-3">Proyectos</h2>
      <div className="row g-3">
        {proyectos.map(p => (
          <div className="col-md-4" key={p.id}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  )
}
