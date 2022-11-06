import { useParams } from "react-router-dom";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import useFetch from "fetch-suspense";
import NewAnswer from "../Answers/NewAnswer";
import { Panel } from "primereact/panel";
import { Rating } from "primereact/rating";

import { OrderList } from "primereact/orderlist";
import "./Question.css";
import { useSelector } from "react-redux";

function Question() {
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("danger");
  const [title, setTitle] = useState();

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const user = useSelector((s) => s.user);

  let token;
  if (newData) {
    token = newData.data.token;
  }

  const { id } = useParams();

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
    )
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            setAlertSeverity("warning");
            setShowAlert(true);
            setErrorMessage(text);
            setTitle("Oh snap! ");
          });
        } else {
          res.json().then((data) => {
            setAlertSeverity("success");
            setErrorMessage(data.message);
            setShowAlert(true);
            setTitle("Nice!");
          });
          setTimeout(function () {
            if (alert) window.location.reload();
          }, 5000);
        }
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  };
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
            cancel={false}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Panel header={QuestionData.Title}>
              <p>{QuestionData.Question}</p>
            </Panel>
          </Col>
        </Row>
        {user && (
          <>
            <Row>
              <NewAnswer
                setShowAlert={setShowAlert}
                setErrorMessage={setErrorMessage}
                setTitle={setTitle}
                setAlertSeverity={setAlertSeverity}
              />
            </Row>
            <Row>
              <Col>
                {showAlert && (
                  <Alert
                    variant={alertSeverity}
                    onClose={() => {
                      setShowAlert(false);
                      window.location.reload();
                    }}
                    dismissible
                    className="alert-fixed"
                  >
                    <Alert.Heading>{title}</Alert.Heading>
                    <p>{errorMessage}</p>
                  </Alert>
                )}
              </Col>
            </Row>
          </>
        )}
        <Row>
          <Col>
            {answers && (
              <OrderList
                value={answers}
                header="Answers"
                dataKey="ID"
                itemTemplate={itemTemplate}
                className="OrderList"
              ></OrderList>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Question;
