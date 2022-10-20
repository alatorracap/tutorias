//import "./User.css";
import useFetch from "fetch-suspense";
import { json, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//*import de bootstrap
import ListGroup from "react-bootstrap/ListGroup";

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
      <ListGroup>
        {users.data.result.map((u) => (
          <ListGroup.Item key={u.ID}>
            <div id="username" className="fw-bold">
              <Link to={`/users/${u.ID}`}>{u.Username}</Link>
            </div>
            <div id="role">{u.UserRole}</div>
            <div id="tech"> {u.Technology}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Users;
