import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";
import { useUser } from "../hooks/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function User() {
  console.log("entro al user");
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;
  //*agarra el parametro pasado al enlace
  let { id } = useParams();

  console.log("id", id);
  // const data = useUser(id, token);
  const data = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
    {
      headers: { Authorization: token },
    }
  );
  console.log("data", data);

  const User = data.data.result[0];
  const editLink = `/user/${User.ID}`;

  // console.log("User", User);

  //* confirma si el usuario actual es el mismo que el que se esta visitando
  const own = User.ID === newData.data.info.id ? true : false;
  console.log("own", own);

  return (
    <Card className="UserCard">
      {own && (
        <Card.Body>
          <h5 class="card-title"> {User.Username}</h5>
          <p>Email: {User.Email}</p>
          <p>Role: {User.UserRole}</p>
          <p>Technology: {User.Technology}</p>

          <Button variant="primary" href={editLink}>
            Editar
            {/* <Link to={`/user/${User.ID}`}>Edit</Link> */}
          </Button>
        </Card.Body>
      )}
      {!own && (
        <Card.Body>
          <h5 class="card-title">User ID: {User.ID}</h5>
          <p>Username: {User.Username}</p>
        </Card.Body>
      )}
    </Card>
  );
}

export default User;
