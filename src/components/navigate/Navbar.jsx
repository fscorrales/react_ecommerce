import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <p>Ir a...</p>
      <NavLink to="/">Home</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/acerca"
      >
        Acerca
      </NavLink>
      {/* <NavLink to="/detalle">Detalle</NavLink> */}
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}

export default Menu;
