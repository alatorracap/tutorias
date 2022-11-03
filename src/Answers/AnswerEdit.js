import useFetch from "fetch-suspense";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import editAnswer from "../Controllers/editAnswer";

function AnswerEdit() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  const token = newData.data.token;
  //*agarra el parametro pasado al enlace
  let { id } = useParams();

  const data = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/answer/" + id,
    {
      headers: { Authorization: token },
      method: "GET",
    }
  );
  console.log("data", data);
  const fetchData = data.data[0];
  const answerData = [fetchData.ID, fetchData.Answer];

  return (
    <div className="editQuestion">
      <Form>
        <Form.Group>
          <Form.Label>Respuesta</Form.Label>
          <Form.Control
            type="text"
            placeholder={answerData[1]}
            onChange={(e) => {
              answerData[1] = e.target.value;
              console.log(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            editAnswer(answerData, token);
          }}
        >
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

export default AnswerEdit;
