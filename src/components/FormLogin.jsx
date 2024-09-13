import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css"
import { getUsers } from "../services/user";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertError, setAlertError] = useState("");
  const [alerta, setAlerta] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userList = await getUsers();
    const validUsers = userList.find((user) => user.email === email);

    if (!validUsers) {
      setAlertError("El correo o contraseña incorrecto");
      return;
    }
    if (validUsers) {
      setAlerta("Inicio de sesión exitoso");
      localStorage.setItem("Autenticado", true)
      navigate("/home");
      return;
    }
  };

  return (
    <section>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} id="signupForm">
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingrese un email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Iniciar sesión" />
          <p>
            ¿Ya tienes una cuenta? <Link to="/sigup">Registro</Link>
          </p>
        </form>
        {alertError && <p id="error">{alertError}</p>}
        {alerta && <p id="alerta">{alerta}</p>}
      </div>
    </section>
  );
};

export default FormLogin;
