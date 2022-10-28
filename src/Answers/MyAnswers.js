import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import useFetch from "fetch-suspense";

function MyAnswers() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;
  const user_id = newData.data.info.id;

  const myAnswers = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/myanswers/" + user_id,
    {
      headers: { Authorization: token },
    }
  );
  console.log("myAnswers", myAnswers);

  return (
    <div className="myanswers">
      User Answers
      {myAnswers && (
        <ListGroup>
          {myAnswers.data.map((a, index) => (
            <ListGroupItem key={index} action variant="light">
              <Link to={`/questions/${a.Question_ID}`}> {a.Answer}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default MyAnswers;
