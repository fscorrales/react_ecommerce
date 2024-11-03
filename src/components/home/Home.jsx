import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/acerca");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}

export default Home;
