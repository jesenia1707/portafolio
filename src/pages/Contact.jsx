import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  // 🔍 Validaciones
  const validar = () => {
    let nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    const emailRegex = /^[\w.%+-]+@(duocuc\.cl|gmail\.com|profesor\.duoc\.cl)$/;
    if (!emailRegex.test(form.email)) {
      nuevosErrores.email =
        "Debe ser un correo válido de @duocuc.cl, @gmail.com o @profesor.duoc.cl";
    }

    const telefonoRegex = /^\+569\d{8}$/;
    if (!telefonoRegex.test(form.telefono)) {
      nuevosErrores.telefono =
        "Debe ingresar un número válido (+569 seguido de 8 dígitos).";
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "Por favor, deja un mensaje.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setExito(true);
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      setTimeout(() => setExito(false), 4000);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#fff0f6",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container shadow-lg rounded"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        {/* 📬 Formulario (izquierda) */}
        <div className="col-md-6 p-4" style={{ flex: "1 1 50%" }}>
          <h2 className="text-center fw-bold text-rosa mb-4">Contáctame</h2>

          {exito && (
            <div className="alert alert-success text-center">
              ✅ ¡Mensaje enviado correctamente!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
              />
              {errores.nombre && (
                <small className="text-danger">{errores.nombre}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="ejemplo@duocuc.cl"
              />
              {errores.email && (
                <small className="text-danger">{errores.email}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-control"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+569XXXXXXXX"
              />
              {errores.telefono && (
                <small className="text-danger">{errores.telefono}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Mensaje</label>
              <textarea
                name="mensaje"
                className="form-control"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
              ></textarea>
              {errores.mensaje && (
                <small className="text-danger">{errores.mensaje}</small>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-rosa px-4 py-2"
                style={{
                  borderRadius: "25px",
                  fontWeight: "500",
                }}
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>

        {/* 🌸 Info personal (derecha) */}
        <div
          className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundColor: "#000",
            color: "#ff80b3",
            flex: "1 1 50%",
            padding: "2rem",
          }}
        >
          <h3 className="fw-bold mb-3">Jesenia Pardo Díaz</h3>
          <p className="mb-2">📧 jes.pardo@duocuc.cl</p>
          <p className="mb-4">📞 +56 9 8636 9552</p>

          <div className="d-flex gap-4 justify-content-center fs-3">
            <a
              href="https://www.facebook.com/jessy.diaz.52493"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff80b3" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/jesenia1707"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff80b3" }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
