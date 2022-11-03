import useFetch from "fetch-suspense";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function NewAnswer() {
  //*Agarra el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

  //* Verifica usuario
  const user = useSelector((s) => s.user);

  //*agarra el parametro pasado al enlace
  let { id } = useParams();
  // console.log("id dentro del new answer:", id);

  const [answer, setAnswer] = useState("");
  const [question_id] = useState(id);

  const handleAnswer = async (e) => {
    const data = await fetch("http://localhost:3000/answers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        answer: answer,
        question_id: question_id,
      }),
    });
    // if (!answ.ok) {
    //   console.log(answ.statusText);
    // } else {
    // }
    console.log("answer data", data);
    window.location.reload(false);
  };

  return (
    <>
      {user && (
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Tu respuesta"
              value={answer}
              onChange={(e) => {
                e.preventDefault();
                setAnswer(e.target.value);
                console.log(answer);
              }}
            />
          </Form.Group>
          <Button onClick={handleAnswer}>Responde!</Button>
        </Form>
      )}
      {!user && <div>Inicia sesion pa responder</div>}
    </>
  );
}

export default NewAnswer;
