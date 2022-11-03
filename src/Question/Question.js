import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import useFetch from "fetch-suspense";
import NewAnswer from "../Answers/NewAnswer";
import { Panel } from "primereact/panel";
import { Rating } from "primereact/rating";

import { OrderList } from "primereact/orderlist";
import "./Question.css";

function Question() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

  const { id } = useParams();
  const Question = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
    { method: "GET" }
  );
  console.log("************************Question", Question);

  // const Answers = useAnswers(id);
  const QuestionData = Question.data.question;
  const Answers = Question.data.answer;
  // console.log("Answers", Answers);

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
  console.log("Answers", Answers);

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
        <div className="product-list-detail">
          <h5 className="mb-2">{item.Answer}</h5>
          <i className="pi pi-tag product-category-icon"></i>
          <span className="product-category">{item.AnswerDate}</span>
        </div>
        <div className="answer-rating">
          <Rating
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
    <div>
      <Panel header={QuestionData.Title}>
        <p>{QuestionData.Question}</p>
      </Panel>

      <NewAnswer />

      {Answers && (
        <OrderList
          value={Answers}
          header="Answers"
          dataKey="ID"
          itemTemplate={itemTemplate}
          showFilter={false}
          //filter
          //filterBy="name"
          className="OrderList"
        ></OrderList>
      )}
    </div>
  );
}

export default Question;
