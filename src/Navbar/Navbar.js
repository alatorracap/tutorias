import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Stack } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarLoginSignup from "../Login/NavbarLoginSignup";
import QuestionSearch from "./QuestionSearch";
<<<<<<< HEAD

function AlejandriaNavbar(props) {
  const { setShowLogin, setShowSignUp } = props;
=======
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store";
import { Button } from "react-bootstrap";

function AlejandriaNavbar(props) {
  const { setShowLogin, setShowSignUp } = props;
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e

  return (
    <Navbar bg="light" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#home">Alejandria</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <QuestionSearch />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
<<<<<<< HEAD
          <NavbarLoginSignup
            setShowLogin={setShowLogin}
            setShowSignUp={setShowSignUp}
          />
=======
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
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AlejandriaNavbar;
