import { Link } from "react-router-dom";
import { useMyQuestions, useMyQuestionss, useQuestions } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, ListGroupItem } from "react-bootstrap";
import { Panel } from "primereact/panel";

function MyQuestions() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const user_id = newData.data.info.id;

  const myQuestions = useMyQuestions(user_id);

  return (
    <div className="questionDiv">
      {!myQuestions && (
        <Container>
          <Panel header="My Questions">You dont have any question</Panel>
        </Container>
      )}
      {myQuestions && (
        <Container>
          <Panel header="My Questions">
            <ListGroup>
              {myQuestions.data.map((q, index) => (
                <ListGroupItem key={index} action variant="light">
                  <Link to={`/question/${q.ID}`} state={{ question: q }}>
                    {q.Title}
                  </Link>
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
