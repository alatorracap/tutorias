import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useSetUser } from "../UserContext";
import { userLogin, userLogout } from "../store";

function Login(props) {
  const { setShow } = props;
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (e) => {
    // Call sethShow from parent(setShowLogin) function and set to false for close the modal
    setShow(false);

    e.preventDefault();
    setStatus("loading");

    const res = await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/users/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    //* Mantiene la sesion guardada en el local storage
    if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log("data", data);
      dispatch(userLogin(data));
      localStorage.setItem("session", data.data.token);
    }

    // if (data.error) {
    //   setStatus("error");
    // } else {
    //   setUser(data);
    //   setStatus("login");
    //   // <Navigate to="/questions" />;
    // }
  };

  // if (status === "loading") {
  //   return (
  //     <div id="login" className="loading">
  //       Cargando...
  //     </div>
  //   );
  // }

  return (
    <form onSubmit={handleLogin}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address {process.env.TECHNOLOGY} </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </Form.Group>
        {status === "error" && (
          <p className="error">Usuario o contraseña incorrectos.</p>
        )}
        <Stack direction="vertical" gap={2}>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Log in
          </Button>
          <p class="text-center , text-muted">
            Please register if you haven't already done so.
          </p>
        </Stack>
      </Form>
    </form>
  );
}
export default Login;
