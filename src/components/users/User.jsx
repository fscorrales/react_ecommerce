// import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function User({ id, name, role, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
      <p>{id}</p>
      {/* <Link to={`/post-form/${id}`}>
        <button>Postear</button>
      </Link> */}
    </div>
  );
}

export default User;
