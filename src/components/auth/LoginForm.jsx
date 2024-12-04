import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
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
    <>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <Stack direction="column" spacing={2}>
            <TextField
              label="E-mail"
              variant="outlined"
              placeholder="tu@email.com"
              onChange={handleChange}
              name="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              placeholder="••••••"
              onChange={handleChange}
              name="password"
              type="password"
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Container>
            <Button variant="contained" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
          </Container>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
