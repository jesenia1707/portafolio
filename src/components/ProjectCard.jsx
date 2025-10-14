import React from 'react'

export default function ProjectCard({img, title, description, tech, link}){
  return (
    <div className="card card-custom h-100">
      {img && <img src={img} className="card-img-top" alt={title} style={{height:160,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{fontSize:14}}>{description}</p>
      </div>
      <div className="card-footer" style={{background:'transparent',borderTop:'none'}}>
        <small className="text-muted">{tech}</small>
        {link && <div className="mt-2"><a href={link} target="_blank" rel="noreferrer" className="btn btn-sm" style={{background:'var(--accent)',color:'white',borderRadius:8}}>Ver demo / repo</a></div>}
      </div>
    </div>
  )
}
