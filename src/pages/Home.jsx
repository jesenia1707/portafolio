import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import jeseniaImg from "../assets/jesenia.png"; // ✅ Asegúrate de que esta ruta sea correcta
import "../index.css";
import "./Home.css";

const Home = () => {
  return (
    <Container
      fluid
      className="home-container text-center py-5"
      style={{ backgroundColor: "#ffe6f2", minHeight: "100vh" }}
    >
      <Row className="justify-content-center align-items-center">
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
            >
              <FaFacebook className="me-2" /> Facebook
            </Button>
            <Button
              variant="dark"
              href="https://github.com/jesenia1707"
              target="_blank"
              className="shadow-sm"
            >
              <FaGithub className="me-2" /> GitHub
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
