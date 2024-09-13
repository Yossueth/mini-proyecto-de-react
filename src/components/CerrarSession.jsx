import "../styles/Home.css";

import { useNavigate } from "react-router-dom";

function CerrarSession() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("Autenticado");
    navigate("/");
  }

  return (
    <div>
      <button id="btnCerrarSession" onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
}

export default CerrarSession;
