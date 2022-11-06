import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, ListGroupItem, Row } from "react-bootstrap";
import useFetch from "fetch-suspense";
import NewAnswer from "../Answers/NewAnswer";
import { Panel } from "primereact/panel";
import { Rating } from "primereact/rating";

import { OrderList } from "primereact/orderlist";
import "./Question.css";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

function Question() {
  const user = useSelector((s) => s.user);

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  let token;
  if (newData) {
    token = newData.data.token;
  }

  const { id } = useParams();

  console.log(
    useFetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
      { method: "GET" }
    )
  );

  const question = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
    { method: "GET" }
  );

  const onChangeRatingValue = async (e, answerID) => {
    const res = await fetch(
      "http://localhost:" +
        process.env.REACT_APP_PORT +
        "/answers/" +
        answerID +
        "/votes",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          vote: e.target.value,
        }),
      }
    );
  };
  // const Answers = useAnswers(id);
  const QuestionData = question.data.question;
  const answers = question.data.answer;

  const Answ = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/Answer/" + id,
    { method: "GET" }
  );

  // Loop of answers
  const itemTemplate = (item) => {
    const answerVote =
      Answ.votes && Answ.votes.find((vote) => vote.Answer_ID === item.ID);
    //only if answerVote is !== undefined
    let rating = 0;
    if (answerVote !== undefined) {
      rating = answerVote.Vote;
    }

    return (
      <div className="product-item">
        <div className="answer-text">
          <h5 className="mb-2">{item.Answer}</h5>
          <i className="pi pi-calendar answer-calendar-icon"></i>
          <span className="product-category">
            {new Date(item.AnswerDate).toLocaleString({
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="answer-rating">
          <Rating
            className="p-rating"
            value={rating}
            onChange={(e) => onChangeRatingValue(e, item.ID)}
            stars={5}
          />
        </div>
      </div>
    );
  };
  return (
    <Container>
      <Row>
        <Col>
          <Panel header={QuestionData.Title}>
            <p>{QuestionData.Question}</p>
          </Panel>
        </Col>
      </Row>

      <Row>
        <NewAnswer />
      </Row>

      <Row>
        <Col>
          {answers && Answ.votes && (
            <OrderList
              value={answers}
              header="Answers"
              dataKey="ID"
              itemTemplate={itemTemplate}
              //filter
              //filterBy="name"
              className="OrderList"
            ></OrderList>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Question;
