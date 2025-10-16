import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import jeseniaImg from "../assets/jesenia.png";
import profileImg from "../assets/profile.png";
import "../css/Home.css";

const Home = ({ noticias = [] }) => {
  const proyectos = [
    {
      titulo: "Proyecto 1",
      descripcion:
        "Proyecto enfocado en optimizar el acceso al metro mediante tecnología biométrica, reduciendo tiempos de espera y mejorando la seguridad.",
      imagen: profileImg,
    },
    {
      titulo: "Proyecto 2",
      descripcion:
        "Sistema de gestión basado en microservicios con Spring Boot, Maven y JPA. Proyecto final sobre transformación digital empresarial.",
      imagen: profileImg,
    },
    {
      titulo: "Proyecto 3",
      descripcion:
        "Tienda digital para la venta y gestión de productos de piscinas, con un carrito de compras y diseño adaptable.",
      imagen: profileImg,
    },
  ];

  return (
    <Container
      fluid
      className="home-container text-center py-5"
      style={{ backgroundColor: "#ffe6f2", minHeight: "100vh" }}
    >
      {/* 🌸 SECCIÓN DE PRESENTACIÓN */}
      <Row className="justify-content-center align-items-center mb-5">
        <Col md={6} className="d-flex flex-column align-items-center">
          <img
            src={jeseniaImg}
            alt="Jesenia Pardo Díaz"
            className="img-fluid rounded-circle shadow-lg mb-4"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              border: "5px solid #ff80b3",
            }}
          />
          <h1 className="fw-bold text-dark">Jesenia Pardo Díaz</h1>
          <h4 className="text-muted">
            Estudiante de Ingeniería en Informática - Duoc UC
          </h4>
          <p className="mt-3 fs-5" style={{ maxWidth: "700px" }}>
            Soy una persona apasionada por la tecnología, el desarrollo web y la
            innovación digital. Me encanta aprender, crear soluciones prácticas
            y trabajar en proyectos que combinan creatividad con funcionalidad.
          </p>

          {/* 🌷 Íconos de redes sociales */}
          <div className="social-links d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/jessy.diaz.52493"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4267B2", fontSize: "2.5rem" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/jesenia1707"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#333", fontSize: "2.5rem" }}
            >
              <FaGithub />
            </a>
          </div>
        </Col>
      </Row>

      {/* 💻 SECCIÓN DE PROYECTOS */}
      <section
        className="projects-section py-5"
        style={{ backgroundColor: "#ffe6f0" }}
      >
        <h2 className="text-rosa mb-4 fw-bold">Mis Proyectos</h2>
        <Row className="justify-content-center g-4 px-4">
          {proyectos.map((p, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={p.imagen}
                  alt={p.titulo}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderBottom: "3px solid #f8c3d6",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-rosa">
                    {p.titulo}
                  </Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                  <Button
                    variant="outline-danger"
                    style={{
                      backgroundColor: "#ff80b3",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* 📰 SECCIÓN DE NOTICIAS */}
      <section
        className="news-section py-5"
        style={{ backgroundColor: "#fff5f8" }}
      >
        <h2 className="text-rosa mb-4 fw-bold">Noticias</h2>
        <div className="container">
          {noticias && noticias.length > 0 ? (
            noticias.map((n, index) => (
              <div key={index} className="news-card p-3 mb-3 shadow-sm">
                <h4 className="text-rosa">{n.titulo}</h4>
                <small className="text-muted">{n.fecha}</small>
                <p>{n.contenido}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">No hay noticias disponibles por ahora.</p>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Home;
