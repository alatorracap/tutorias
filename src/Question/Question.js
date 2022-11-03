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

function Question() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

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

  // const Answers = useAnswers(id);
  const QuestionData = question.data.question;
  const answers = question.data.answer;
  console.log("Answers", answers);

  // answers &&
  //   answers.map((q) => {
  //     //Get Answers iteration date and save in a variable
  //     console.log(typeof q.AnswerDate);
  //     if (typeof q.AnswerDate !== "string") {
  //       console.log("soy distinto de string");
  //     }
  //     let dateFromAnswersUnformated = q.AnswerDate;
  //     console.log("q.AnswerDate", q.AnswerDate);

  //     //Format date from Answers from String to datetime
  //     let dateFormated = new Date(dateFromAnswersUnformated).toLocaleDateString(
  //       {
  //         day: "2-digit",
  //         month: "2-digit",
  //         year: "numeric",
  //       }
  //     );
  //     console.log("dateFormated", dateFormated);
  //     console.log(typeof dateFormated);
  //     console.log("dateFromAnswersUnformated", dateFromAnswersUnformated);

  //     //Update Answers.data.AnswerDate with formatted date
  //     q.AnswerDate = dateFormated;
  //     console.log("q.AnswerDate", q.AnswerDate);

  //     return null;
  //   });

  const Answ = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/Answer/" + id,
    { method: "GET" }
  );
  console.log("Answ", Answ);

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

  const itemTemplate = (item) => {
    return (
      <div className="product-item">
        {/* <div className="image-container">
          <img
            src={`images/product/${item.image}`}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={item.name}
          />
        </div> */}
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
            //value={value}
            //onChange={(e) => setValue(e.value)}
            //stars={5}
          />
        </div>
        {/* <div className="product-list-action">
          <h6 className="mb-2">${item.price}</h6>
          <span
            className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}
          >
            {item.inventoryStatus}
          </span>
        </div> */}
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
