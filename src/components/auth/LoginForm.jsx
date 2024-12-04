import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        form
      );
      console.log(response.data.userToken);
      localStorage.setItem("token", response.data.userToken);
      console.log(localStorage.getItem("token"));
      //   setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        alert("Usuario no encontrado. Por favor, regístrate.");
      } else {
        alert("El usuario no existe, debe registrarse");
      }
    }
  };

  return (
    <div>
      <h3>Iniciar Sesión</h3>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
