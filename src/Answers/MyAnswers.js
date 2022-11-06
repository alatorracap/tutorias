import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, ListGroupItem } from "react-bootstrap";
import { useMyAnswers } from "../hooks/api";
import { Panel } from "primereact/panel";
// import useFetch from "fetch-suspense";

function MyAnswers() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  // const token = newData.data.token;
  const user_id = newData.data.info.id;

  const myAnswers = useMyAnswers(user_id);

  console.log("myAnswers", myAnswers);

  return (
    <div className="myanswers">
      {myAnswers && (
        <Container>
          <Panel header="My Answers">
            <ListGroup>
              {myAnswers.data.map((a, index) => (
                <ListGroupItem key={index} action variant="light">
                  <Link to={`/answers/${a.ID}`}> {a.Answer}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Panel>
        </Container>
      )}
    </div>
  );
}

export default MyAnswers;
