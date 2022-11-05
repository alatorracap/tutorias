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
  console.log("************************Question", question);
  console.log("Question", question);

  const onChangeRatingValue = async (e, answerID) => {
    console.log("e.target.value", e);
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
  console.log("Answers", answers);

  const Answ = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/Answer/" + id,
    { method: "GET" }
  );
  console.log("Answ", Answ);
  const votes = Answ.votes;

  console.log("Answ.votes", Answ.votes);

  const handleDeleteQuestion = async (to) => {
    await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    console.log("question DELETE deldel");
  };

  const handleDeleteAnswer = async (a_id) => {
    await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/answer/" + a_id,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    console.log("answer DELETE deldel");
  };

  /*  const handleEvendDelete=(id)=>{
    setMetodo("DELETE")
    setUrl('http://localhost:3001/answers/'+id) 
    console.log('url2', url)
  } */
  console.log("Answers", answers);

  // Loop of answers
  const itemTemplate = (item) => {
    console.log("item", item);

    const answerVote = votes.find((vote) => vote.Answer_ID === item.ID);
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
            class="p-rating"
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
          {answers && (
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
