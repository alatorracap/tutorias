import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useFetch from "fetch-suspense";
import NewAnswer from "../Answers/NewAnswer";
import votesTotal from "../Controllers/votesTotal";
import answerVotes from "../Controllers/answerVotes";

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
  // console.log("************************Question", Question);

  const QuestionData = Question.data.question;
  const Answers = Question.data.answer;
  // const Answers = useAnswers(id);
  console.log("Answers", Answers);

  const Answ = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/Answers/" + id,
    { method: "GET" }
  );
  // console.log("Answ", Answ);
  const answer_votes = [];

  //* yo intentando hacer lo de los votos
  //* a votes se le pasa el id de la respuesta

  //* isAnswer confirma si la peticion por las respuesta devuelve error o no
  const isAnswer = Answ.status === "Error" ? false : true;
  /* 
  const handleDeleteQuestion = async (to) => {
    await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    console.log("question DELETE deldel");
  }; */
  /* 
  const handleDeleteAnswer = async (a_id) => {
    await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/answer/" + a_id,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    console.log("answer DELETE deldel");
  }; */
  /*  const handleEvendDelete=(id)=>{
    setMetodo("DELETE")
    setUrl('http://localhost:3001/answers/'+id) 
    console.log('url2', url)
  } */

  return (
    <div>
      1 Question with answers
      <Card>
        <Card.Title>{QuestionData.Title}</Card.Title>
        <Card.Text>{QuestionData.Question}</Card.Text>
      </Card>
      <NewAnswer />
      {Answers && (
        <div>
          {Answers.map((a, index) => (
            <>
              {/* {console.log("********answer ID*****", a.ID)} */}
              {/* {answerVotes(1)} */}
              {/* {console.log("a", a)} */}
              <ListGroup>
                <ListGroupItem key={index}>
                  <div>
                    <p className="answer"> {a.Answer}</p>
                    <p className="votes"> {} media en votos</p>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </>
          ))}
        </div>
      )}
      {/*        
      {isAnswer && (
        <div>
          {Answ.data.map((a, index) => (
            <>
              
              <ListGroup>
                <ListGroupItem key={index}>
                  <div>
                    <p className="answer"> {a.Answer}</p>
                    <p className="votes"> votos</p>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </>
          ))}
        </div>
      )} 
    */}
    </div>
  );
}

export default Question;
