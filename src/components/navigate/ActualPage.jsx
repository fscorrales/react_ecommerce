import { useLocation } from "react-router-dom";

function ActualPage() {
  // ver que otros argumentos tiene useLocation
  const { pathname } = useLocation();
  return (
    <div>
      <p>Usted esta en {pathname}</p>
    </div>
  );
}

export default ActualPage;
