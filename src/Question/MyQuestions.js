import { useState } from "react";
import { Link } from "react-router-dom";
import { useMyQuestion, useMyQuestions, useQuestions } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, ListGroupItem } from "react-bootstrap";
import useFetch from "fetch-suspense";
import { Panel } from "primereact/panel";

function MyQuestions() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;
  const user_id = newData.data.info.id;

  /* const questions = useFetch(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/questions/?User_ID=" +
      user_id,
    {
      headers: { Authorization: token },
    }
  ); */
  const myQuestions = useMyQuestion(user_id);
  console.log("questions", myQuestions);

  return (
    <div className="questionDiv">
      {myQuestions && (
        <Container>
          <Panel header="My Questions">
            <ListGroup>
              {myQuestions.data.map((q, index) => (
                <ListGroupItem key={index} action variant="light">
                  <Link to={`/question/${q.ID}`}> {q.Title}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Panel>
        </Container>
      )}
    </div>
  );
}

export default MyQuestions;
