import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import jeseniaImg from "../assets/jesenia.png"; // Foto principal
import profileImg from "../assets/profile.png"; // Imagen para los proyectos
import "../index.css";
import "../css/Home.css";

const Home = () => {
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
          <div className="mt-4">
            <Button
              variant="light"
              href="https://www.facebook.com/jessy.diaz.52493"
              className="me-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="me-2" /> Facebook
            </Button>
            <Button
              variant="dark"
              href="https://github.com/jesenia1707"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-sm"
            >
              <FaGithub className="me-2" /> GitHub
            </Button>
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
          {[1, 2, 3].map((p) => (
            <Col md={4} key={p}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={profileImg} // 👈 Imagen del proyecto
                  alt={`Proyecto ${p}`}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderBottom: "3px solid #f8c3d6",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-rosa">
                    Mis proyecto {p}
                  </Card.Title>
                  <Card.Text>
                    Descripción del proyecto {p}. Proyecto enfocado en optimizar el acceso al 
                    metro mediante tecnología biométrica, reduciendo tiempos de espera y mejorando la seguridad
                  </Card.Text>
                    Descripción del proyecto {p}. Sistema de gestión basado en microservicios con Spring Boot, Maven y JPA.
                    Proyecto final sobre transformación digital empresarial
                  <Card.Text>
                    Descripción del proyecto {p}. Tienda digital para la venta y gestión de productos de piscinas,
                    con un carrito de compras y diseño adaptable.
                  </Card.Text>
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
    </Container>
  );
};

export default Home;
