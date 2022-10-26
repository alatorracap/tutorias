import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuestions } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import useFetch from "fetch-suspense";

function MyQuestions() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const user_id = newData.data.info.id;
  // console.log("user_id", user_id);

  const questions = useFetch(
    "localhost:" + process.env.REACT_APP_PORT + "/questions/?User_ID=" + user_id
  );
  // console.log("questions", questions);

  return (
    <div className="questionDiv">
      Questions
      {/* {questions && (
        <ListGroup>
          {questions.data.map((q, index) => (
            <ListGroupItem key={index} action variant="light">
              <Link to={`/question/${q.ID}`}> {q.Title}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      )} */}
    </div>
  );
}

export default MyQuestions;
