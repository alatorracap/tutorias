import useFetch from "fetch-suspense";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Editor } from "primereact/editor";

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

  const [answer, setAnswer] = useState("");

  const newanswer = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/answers/",
    {
      method: "POST",

      headers: { Authorization: token },

      body: JSON.stringify({
        answer,
      }),
    }
  );
  if (!newanswer.ok) {
    // TODO: Manejar error
  } else {
  }

  return (
    <Editor
      style={{ height: "320px" }}
      value={answer}
      onTextChange={(e) => setAnswer(e.htmlValue)}
    />
  );
}

export default NewAnswer;
