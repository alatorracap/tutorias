import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLogin } from "../store";

function SignUp(props) {
  console.log("entro al signup");
  const { setShow } = props;
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [technology, setTechnology] = useState("");

  const technologies = process.env.REACT_APP_TECHNOLOGY.split(",", 6);
  const roles = process.env.REACT_APP_ROLE.split(",");

  const handleSignUp = async (e) => {
    //*setshow false oculta el modal, recuerda activarlo cuando funcione el
    //*sign in
    setShow(false);

    e.preventDefault();
    const res = await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/users/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          userRole: userRole,
          technology: technology,
        }),
      }
    ).then((response) => response.text());

    const data = JSON.parse(res);

    if (data.Status !== "ok") {
      console.log("res", res);

      // TODO: Manejar error
    } else {
      console.log("ha salido bien", data);
    }
  };

  return (
    <Form>
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
          disabled={userRole !== "Expert"}
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
        <Button variant="primary" type="submit" onClick={handleSignUp}>
          Sign up
        </Button>
        <p className="text-center , text-muted">All fields are required.</p>
      </Stack>
    </Form>
  );
}

export default SignUp;
