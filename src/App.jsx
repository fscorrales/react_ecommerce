import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Login from "./components/auth/LoginForm";
import Error404 from "./components/errors/Error404";
import Home from "./components/home/Home";
import Menu from "./components/navigate/ResponsiveNavbar";
import ProductDetails from "./components/products/ProductDetails";
import Produts from "./components/products/ProdutsList";
import Users from "./components/users/Users";

function App() {
  return (
    <>
      {/* <Navigate />
      <ActualPage /> */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Produts />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
