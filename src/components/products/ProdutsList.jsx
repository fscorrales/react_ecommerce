import { Link } from "react-router-dom";

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

function Produts() {
  return (
    <div>
      <h3>Produts</h3>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          {product.name}
        </Link>
      ))}
    </div>
  );
}

export default Produts;
