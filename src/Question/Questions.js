import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuestions } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

function Questions() {
  const questions = useQuestions();
  // console.log("questions", questions);

  return (
    <div className="questionDiv">
      Questions
      {questions && (
        <ListGroup>
          {questions.data.map((q, index) => (
            <ListGroupItem key={index} action variant="light">
              {/* <Link to={`/answers/${q.ID}`}> {q.Title}</Link> */}
              <Link to={`/questions/${q.ID}`}> {q.Title} mio</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default Questions;
