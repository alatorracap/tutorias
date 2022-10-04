import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Stack } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarLoginSignup from "../Login/NavbarLoginSignup";
import QuestionSearch from "./QuestionSearch";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store";
import { Button } from "react-bootstrap";

function AlejandriaNavbar(props) {
  const { setShowLogin, setShowSignUp } = props;
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#home">Alejandria</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <QuestionSearch />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {!user && (
            <NavbarLoginSignup
              setShowLogin={setShowLogin}
              setShowSignUp={setShowSignUp}
            />
          )}
          {user && (
            <>
              {user.data.email}
              <Button onClick={() => dispatch(userLogout())}>Salir</Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AlejandriaNavbar;
