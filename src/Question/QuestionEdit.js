import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Panel } from "primereact/panel";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import editQuestion from "../Controllers/editQuestion";

function QuestionEdit() {
  const navigate = useNavigate();
  //*agarra el parametro pasado al enlace
  const location = useLocation();
  const { question } = location.state;

  const [questionTitle, setQuestionTitle] = useState(question.Title);
  const [questionDescription, setQuestionDescription] = useState(
    question.Question
  );

  const questionUpdate = {
    ID: question.ID,
    Title: questionTitle,
    Question: questionDescription,
  };

  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  let token = "";
  if (newData !== undefined && newData !== null && newData.data) {
    token = newData.data.token;
  }

  const handleDeleteQuestion = async (to) => {
    await fetch(
      "http://localhost:" +
        process.env.REACT_APP_PORT +
        "/questions/" +
        question.ID,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
  };

  return (
    question && (
      <div className="editQuestion">
        <Panel header="Edit Question">
          <Form>
            <Form.Group>
              <Container>
                <Row>
                  <Col>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      type="text"
                      value={questionTitle}
                      onChange={(e) => {
                        setQuestionTitle(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Pregunta</Form.Label>
                    <Form.Control
                      type="text"
                      value={questionDescription}
                      onChange={(e) => {
                        setQuestionDescription(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <div className="ms-auto">
                        <Button
                          variant="secondary"
                          onClick={(e) => {
                            editQuestion(questionUpdate, token);
                            navigate("/myquestions");
                          }}
                        >
                          Save
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="outline-danger"
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteQuestion();
                            navigate("/myquestions");
                          }}
                        >
                          Delete Question
                        </Button>
                      </div>
                    </Stack>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
          </Form>
        </Panel>
      </div>
    )
  );
}

export default QuestionEdit;
