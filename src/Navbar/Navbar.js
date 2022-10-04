import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Stack } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarLoginSignup from "../Login/NavbarLoginSignup";
import QuestionSearch from "./QuestionSearch";

function AlejandriaNavbar(props) {
  const { setShowLogin, setShowSignUp } = props;

  return (
    <Navbar bg="light" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#home">Alejandria</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <QuestionSearch />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavbarLoginSignup
            setShowLogin={setShowLogin}
            setShowSignUp={setShowSignUp}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AlejandriaNavbar;
