import { useState } from "react";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import AlejandriaModal from "../../Components/AlejandriaModal";
import { useNewQuestion } from "../../hooks/api";
import { Panel } from "primereact/panel";

function NewQuestion() {
  // const newQuestion = useNewQuestion();
  // const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [technology, setTechnology] = useState("");

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

  //* Verifica usuario
  const user = useSelector((s) => s.user);

  let technologies = process.env.REACT_APP_TECHNOLOGY;
  technologies = technologies.split(",", 6);

  const handleNewQuestion = async (e) => {
    const res = await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/questions/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          title: title,
          question: question,
          technology: technology,
        }),
      }
    );
    window.location.reload(false);

    /* if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log("pregunta creada", data);
    } */
  };

  return (
    <>
      {user && (
        <Form onSubmit={handleNewQuestion}>
          <Panel header="New Question">
            <Container>
              <Row>
                <Col>
                  <Form.Label>Title</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      placeholder="Title"
                      aria-label="Title"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      placeholder="Question text"
                      aria-label="Texto"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Technology</Form.Label>
                    <Form.Select
                      required
                      onChange={(e) => setTechnology(e.target.value)}
                      name="technology"
                    >
                      <option>Open this select menu</option>
                      {technologies.map((technology) => (
                        <option key={technology} value={technology}>
                          {technology}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal" gap={3}>
                    <div className="ms-auto">
                      <Button variant="secondary" type="submit">
                        Publish
                      </Button>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </Container>
          </Panel>
        </Form>
      )}
      {!user && <div>Inicia sesión para preguntar</div>}
    </>
  );
}
export default NewQuestion;
