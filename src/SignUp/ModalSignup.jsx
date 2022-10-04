import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { json } from "react-router-dom";

function ModalSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [technology, setTechnology] = useState("");

  const technologies = process.env.REACT_APP_TECHNOLOGY.split(", ");
  const roles = process.env.REACT_APP_ROLE.split(", ");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:" + process.env.REACT_APP_PORT + "/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        userRole,
        technology,
      }),
    })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        console.log("data", data);
        //TODO ALERT data.message
      });

    // if (!res.ok) {
    //   console.log(res);
    //   // TODO: Manejar error
    // } else {
    //   const data = await res.json();
    //   console.log("data", data);
    //   //TODO ALERT data.message
    //   //dispatch(userLogin(data))
    //   // setUser(data)
    // }
    /* e.preventDefault();
    console.log("e", e);
    const user = {
      email: email,
      token: password,
    };
    dispatch(userLogin(user)); */
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </Form.Group>
      {/* {status === "error" && (
        <p className="error">Usuario o contraseña incorrectos.</p>
      )} */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Technology</Form.Label>
        <Form.Select
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          name="technology"
        >
          <option>Open this select menu</option>
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Stack direction="vertical" gap={2}>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
        {/* <Button
          variant="outline-primary"
          // onClick={() => setShowLogin(false) && setShowSignUp(true)}
        >
          Sign up
        </Button> */}
      </Stack>
    </Form>
  );
}
export default ModalSignup;
