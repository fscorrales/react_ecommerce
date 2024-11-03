import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 400,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    price: 300,
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div>
      <h2>Detalle</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetails;
