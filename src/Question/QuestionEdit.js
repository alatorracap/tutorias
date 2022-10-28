import useFetch from "fetch-suspense";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";

function QuestionEdit() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;
  //*agarra el parametro pasado al enlace
  let { id } = useParams();

  const data = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/questions/" + id,
    {
      headers: { Authorization: token },
      method: "GET",
    }
  );
  const fetchData = data.data.question;
  // console.log("fetchData", fetchData);
  const questionData = [fetchData.ID, fetchData.Title, fetchData.Question];
  console.log("questionData", questionData);

  return (
    <div className="editQuestion">
      <Form>
        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder={questionData[1]}
            // value={questionData[1]}
            onChange={(e) => {
              questionData[1] = e.target.value;
              console.log(e);
            }}
          />

          <Form.Label>Pregunta</Form.Label>
          <Form.Control
            type="text"
            placeholder={questionData[2]}
            onChange={(e) => {
              questionData[2] = e.target.value;
              console.log(e);
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default QuestionEdit;
