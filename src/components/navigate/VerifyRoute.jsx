import PropTypes from "prop-types";
import { useMatch } from "react-router-dom";

function VerificarRuta({ id }) {
  const match = useMatch(`/detalle/${id}`);

  return (
    <div>{match ? "El producto fue encontrado" : "No se encontro nada"}</div>
  );
}

VerificarRuta.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VerificarRuta;
