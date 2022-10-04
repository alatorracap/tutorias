import { Button, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function NavbarLoginSignup(props) {
  const { setShowLogin, setShowSignUp } = props;
  return (
    <Stack direction="horizontal" gap={2}>
      <Button variant="outline-primary" onClick={() => setShowLogin(true)}>
        Log in
      </Button>
      <Button variant="primary" onClick={() => setShowSignUp(true)}>
        Sign up
      </Button>
    </Stack>
  );
}

export default NavbarLoginSignup;
