import { useParams } from "react-router-dom";
import { useAnswers } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

function Answers() {
  const { id } = useParams();
  const Answers = useAnswers(id);

  /*  const handleEvendDelete=(id)=>{
    setMetodo("DELETE")
    setUrl('http://localhost:3001/answers/'+id) 
    console.log('url2', url)
  } */

  return (
    <div>
      Answers
      {Answers && (
        <div>
          {Answers.data.map((q, index) => (
            <>
              {console.log("q", q)}
              <ListGroup>
                <ListGroupItem key={index}>{q.Answer}</ListGroupItem>
              </ListGroup>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Answers;
