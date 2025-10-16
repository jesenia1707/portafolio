import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")} // 👉 te lleva al Home
      className="back-btn"
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        backgroundColor: "#ff80b3",
        border: "none",
        color: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: 1000,
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4da6")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#ff80b3")}
      title="Volver al inicio"
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
