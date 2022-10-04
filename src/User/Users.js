import "./User.css";
import useFetch from "fetch-suspense";
import { Link } from "react-router-dom";

function Users() {
  // const users = useUsers();

  const users = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/"
  );

  //console.log("us", us);
  console.log("users", users);

  return (
    <div className="allusers">
      users
      <ul className="Users">
        {users.data.result.map((u) => (
          <li key={u.ID}>
            <div id="username">
              <Link to={`/users/${u.ID}`}>{u.Username}</Link>
            </div>
            <div id="role">{u.UserRole}</div>
            <div id="tech"> {u.Technology}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
