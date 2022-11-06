import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, ListGroupItem } from "react-bootstrap";
import { useMyAnswers } from "../hooks/api";
import { Panel } from "primereact/panel";

function MyAnswers() {
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const user_id = newData.data.info.id;

  const myAnswers = useMyAnswers(user_id);

  return (
    <div className="myanswers">
      {!myAnswers && (
        <Container>
          <Panel header="My Answers">You dont have any answers</Panel>
        </Container>
      )}
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
