import "./User.css";
import useFetch from "fetch-suspense";
import { Link } from "react-router-dom";

function Users() {
  // const users = useUsers();

  const users = useFetch("http://localhost:3000/users/");

  //console.log("us", us);
  console.log("users", users);

  return (
    <div className="allusers">
      users
      {users.data.result.map((u) => (
        <>
          <ul className="Users">
            <li>
              <div id="username">
                <Link to={`/users/${u.ID}`}>{u.Username}</Link>
              </div>
              <div id="role">{u.UserRole}</div>
              <div id="tech"> {u.Technology}</div>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Users;
