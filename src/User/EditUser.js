import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { userEdit } from "./userEdit";
import { useState } from "react";
import userEdit from "../Controllers/editUser";
// import e from "express";
function EditUser() {
  // const [userData, setUserData] = useState([]);

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;
  console.log("newData", newData);

  //*agarra el parametro pasado al enlace
  let { id } = useParams();

  //console.log("user iddd", id);

  const data = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
    {
      headers: { Authorization: token },
      method: "GET",
    }
  );
  //console.log("data", data);
  const User = data.data.result[0];
  //console.log("User", User);
  // console.log(User.Username);
  // console.log(User.Email);
  // console.log(User.Password);
  // console.log(User.Technology);
  let news = [
    User.Username,
    User.Email,
    User.Password,
    User.UserRole,
    User.Technology,
  ];
  // console.log("news", news);

  // setUserData(
  //   ...userData,
  //   User.Username,
  //   User.Email,
  //   User.Password,
  //   User.Technology
  // );
  //console.log("userData", userData);

  // setUserData(oldArray => ...oldArray, )

  const handleDelete = async (e) => {
    await fetch("http://localhost:" + process.env.REACT_APP_PORT + "/users/", {
      method: "DELETE",
      headers: { Authorization: token },
    });
    console.log("delete DELETE deldel");
  };
  return (
    <div className="editUser">
      Edit User
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder={User.Username}
            onChange={(e) => {
              news[0] = e.target.value;
              // console.log(e.target.value);
            }}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={User.Email} />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nueva contraseña"
            disabled
          />
          <Form.Label>Technology</Form.Label>
          <Form.Control type="text" placeholder={User.Technology} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            userEdit(token, news);
          }}
        >
          Guardar
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        >
          Borrar usuario
        </Button>
      </Form>
    </div>
  );
}

export default EditUser;
