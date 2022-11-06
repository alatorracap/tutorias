import { useState } from "react";
import { Alert, Button, Form, Stack } from "react-bootstrap";

function SignUp(props) {
  const { setShow } = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [technology, setTechnology] = useState("");

  const technologies = process.env.REACT_APP_TECHNOLOGY.split(",", 6);
  const roles = process.env.REACT_APP_ROLE.split(",");

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("danger");
  const [title, setTitle] = useState();

  const handleSignUp = async (e) => {
    //*setshow false oculta el modal, recuerda activarlo cuando funcione el
    //*sign in

    e.preventDefault();
    await fetch("http://localhost:" + process.env.REACT_APP_PORT + "/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        userRole: userRole,
        technology: technology,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            console.log(text);
            setAlertSeverity("danger");
            setShowAlert(true);
            setErrorMessage(text);
            setTitle("Oh snap! You got an error!");
            //throw new Error(text);
          });
        } else {
          console.log(res);
          res.json().then((data) => {
            //setShow(false);
            console.log(data);
            setAlertSeverity("warning");
            setErrorMessage(data.Message);
            setShowAlert(true);
            setTitle("One last step");
          });
        }
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    if (alertSeverity === "danger") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant={alertSeverity}
          onClose={() => {
            handleAlertClose();
          }}
          dismissible
        >
          <Alert.Heading>{title}</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
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
          <Button variant="primary" onClick={handleSignUp}>
            Sign up
          </Button>
          <p className="text-center , text-muted">All fields are required.</p>
        </Stack>
      </Form>
    </>
  );
}

export default SignUp;
