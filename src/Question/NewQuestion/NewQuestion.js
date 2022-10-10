import { useState } from "react";
import { InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import AlejandriaModal from "../../Components/AlejandriaModal";

function NewQuestion() {
  // const newQuestion = useNewQuestion();
  // const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [technology, setTechnology] = useState("");
  const handleNewQuestion = async (e) => {
    const res = await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          questionText,
          technology,
        }),
      }
    );
    //* Mantiene la sesion guardada en el local storage
    if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log("pregunta creada", data);
    }
  };

  return (
    <form onSubmit={handleNewQuestion}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Text
          as="textarea"
          placeholder="Question"
          aria-label="Question"
          aria-describedby="basic-addon2"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control
          as=""
          aria-label="With textarea"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />
      </InputGroup>
    </form>
  );
}
export default NewQuestion;
