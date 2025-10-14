import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import "../index.css"; // para estilos globales
import "./Home.css";


const Home = () => {
  return (
    <Container fluid className="home-container text-center py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <img
            src="/jesenia.png"
            alt="Jesenia Pardo Díaz"
            className="img-fluid rounded-circle shadow-lg profile-img"
          />
        </Col>
        <Col md={6} className="text-md-start text-center mt-4 mt-md-0">
          <h1 className="fw-bold text-dark">Jesenia Pardo Díaz</h1>
          <h4 className="text-muted">Estudiante de Ingeniería en Informática - Duoc UC</h4>
          <p className="mt-3 fs-5">
            Soy una persona apasionada por la tecnología, el desarrollo web y la innovación digital.
            Me encanta aprender, crear soluciones prácticas y trabajar en proyectos que combinan creatividad con funcionalidad.
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
