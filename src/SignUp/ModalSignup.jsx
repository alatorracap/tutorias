import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AlejandriaModal from "../Components/AlejandriaModal";
import SignUp from "./SignUp";

function ModalSignup(props) {
  const { show, setShow } = props;

  return (
    <AlejandriaModal title="Sign in" show={show} setShow={setShow}>
      <SignUp setShow={setShow} />
    </AlejandriaModal>
  );
}
export default ModalSignup;
