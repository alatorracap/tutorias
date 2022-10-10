import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useSetUser } from "../UserContext";
import { userLogin, userLogout } from "../store";
import AlejandriaModal from "../Components/AlejandriaModal";
import Login from "./Login";

function ModalLogin(props) {
  const { show, setShow } = props;
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (e) => {
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
  };
  return (
    <AlejandriaModal title="Log in" show={show} setShow={setShow}>
      <Login setShow={setShow} />
    </AlejandriaModal>
  );
}

export default ModalLogin;
