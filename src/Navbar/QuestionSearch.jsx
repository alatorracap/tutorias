import { useState } from "react";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { userLogin, userLogout } from "../store";
import Questions from "../Question/Questions";

function QuestionSearch() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default QuestionSearch;
