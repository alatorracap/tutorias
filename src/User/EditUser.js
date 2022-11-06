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

  const technologies = process.env.REACT_APP_TECHNOLOGY.split(",", 6);
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

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [technology, setTechnology] = useState(User.Technology);
  const [role, setRole] = useState(User.UserRole);

  let news = [
    User.Username,
    User.Email,
    role,
    technology,
    oldPassword,
    newPassword,
    repeatNewPassword,
  ];

  const handleDelete = async (e) => {
    await fetch("http://localhost:" + process.env.REACT_APP_PORT + "/users/", {
      method: "DELETE",
      headers: { Authorization: token },
    });
    console.log("delete DELETE deldel");
  };
  return (
    <div className="editUser">
      <Panel header={"Edit user: " + User.Username}>
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Repeat new password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repeat new password"
                    value={repeatNewPassword}
                    onChange={(e) => setRepeatNewPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
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
                      value={technology}
                      onChange={(e) => setTechnology(e.target.value)}
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
                      Save
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
                      Delete User
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
