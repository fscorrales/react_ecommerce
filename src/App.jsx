import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Error404 from "./components/errors/Error404";
import Home from "./components/home/Home";
import Menu from "./components/navigate/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import Produts from "./components/products/ProdutsList";
import Navigate from "./components/navigate/Navigate";
import ActualPage from "./components/navigate/ActualPage";

function App() {
  return (
    <>
      <Navigate />
      <ActualPage />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Produts />} />
        <Route path="/acerca" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
