import { useState } from "react";
import { InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import AlejandriaModal from "../../Components/AlejandriaModal";
import { useNewQuestion } from "../../hooks/api";

function NewQuestion() {
  // const newQuestion = useNewQuestion();
  // const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [technology, setTechnology] = useState("");

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;
  console.log("newData", newData);

  const handleNewQuestion = async (e) => {
    const res = await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          title,
          questionText,
          technology,
        }),
      }
    );

    if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log("pregunta creada", data);
    }
  };

  return (
    <>
      <Form onSubmit={handleNewQuestion}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            //value={title}
            //onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Text
            as="textarea"
            placeholder="Question"
            aria-label="Question"
            aria-describedby="basic-addon2"
            //value={questionText}
            //onChange={(e) => setQuestionText(e.target.value)}
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            //value={technology}
            //onChange={(e) => setTechnology(e.target.value)}
          />
        </InputGroup>
      </Form>
    </>
  );
}
export default NewQuestion;
