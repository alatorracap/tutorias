import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { userEdit } from "./userEdit";
import { useState } from "react";
import userEdit from "../Controllers/editUser";
import { Panel } from "primereact/panel";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../store";

// import e from "express";
function EditUser() {
  // const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const technologies = process.env.REACT_APP_TECHNOLOGY.split(",");
  const roles = process.env.REACT_APP_ROLE.split(",");

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
      <Panel header={"Edit user " + User.Username}>
        <Container>
          <Form>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={User.Username}
                    onChange={(e) => {
                      news[0] = e.target.value;
                      // console.log(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder={User.Email} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Contraseña antigua</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña antigua"
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Nueva contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nueva contraseña"
                  />
                </Col>
                <Col>
                  <Form.Label>Repita la nueva contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repita la nueva contraseña"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      value={User.UserRole}
                      onChange={(e) => (User.UserRole = e.target.value)}
                      name="userRole"
                    >
                      <option>Open this select menu</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Technology</Form.Label>
                    <Form.Select
                      value={User.Technology}
                      onChange={(e) => (User.Technology = e.target.value)}
                      name="technology"
                      // disabled={userRole !== "Expert"}
                    >
                      <option>Open this select menu</option>
                      {technologies.map((technology) => (
                        <option key={technology} value={technology}>
                          {technology}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              {/* <Form.Label>Technology</Form.Label>
              <Form.Control type="text" placeholder={User.Technology} /> */}
            </Form.Group>
            <Row>
              <Col>
                <Stack direction="horizontal" gap={3}>
                  <div className="ms-auto">
                    <Button
                      variant="secondary"
                      type="submit"
                      onClick={(e) => {
                        userEdit(token, news);
                      }}
                    >
                      Guardar
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline-danger"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete();
                        dispatch(userLogout());
                        navigate("/");
                      }}
                    >
                      Borrar usuario
                    </Button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Form>
        </Container>
      </Panel>
    </div>
  );
}

export default EditUser;
