import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Noticias from "./pages/Noticias";
import Contact from "./pages/Contact";

import "./css/home.css";
import noticiasData from "./assets/noticias.json";

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
          <Route path="/" element={<Home noticias={noticias} />} />

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
