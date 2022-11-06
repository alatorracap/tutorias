import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarLoginSignup from "../Login/NavbarLoginSignup";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AlejandriaNavbar(props) {
  const { setShowLogin, setShowSignUp } = props;
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Alejandría</Navbar.Brand>
        {/* <Navbar.Collapse className="justify-content-end">
          <QuestionSearch />
        </Navbar.Collapse> */}
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <NavbarLoginSignup
              setShowLogin={setShowLogin}
              setShowSignUp={setShowSignUp}
            />
          )}
          {user && user.data && (
            <Stack direction="horizontal" gap={3} style={{ color: "white" }}>
              {user.data.info.username}
              <Button
                onClick={() => {
                  dispatch(userLogout());
                  navigate("/");
                }}
              >
                Log out
              </Button>
            </Stack>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AlejandriaNavbar;
