import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/usersSlice";
import User from "./User";

function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/users`)
      .then((res) => dispatch(getUser(res.data)))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Volver</Link>
      <h2>Users</h2>
      {users.map((user) => (
        <User
          key={user._id}
          id={user._id}
          name={user.username}
          role={user.role}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default Users;
