import { useNavigate, useParams } from "react-router-dom";
import { useAnswers } from "../hooks/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import editAnswer from "../Controllers/editAnswer";
import { Panel } from "primereact/panel";
import { useEffect, useRef } from "react";
import { useState } from "react";

function Answers() {
  const navigate = useNavigate();
  const { id } = useParams();
  const Answers = useAnswers(id);

  useEffect(() => {
    if (Answers) {
      setAnswer(Answers.data.Answer);
    }
  }, [Answers]);

  const [answer, setAnswer] = useState();

  const updateAnswer = {
    id: id,
    answer: answer,
  };

  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

  const handleDeleteAnswer = async (to) => {
    console.log(updateAnswer);
    await fetch(
      "http://localhost:" +
        process.env.REACT_APP_PORT +
        "/answers/" +
        updateAnswer.id,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
  };

  return (
    <div className="answersDiv">
      {Answers && (
        <>
          {console.log(Answers.data.Answer)}
          <Panel header={"Edit answer"}>
            <Container>
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Answer</Form.Label>
                      <Form.Control
                        type="text"
                        value={answer}
                        onChange={(e) => {
                          setAnswer(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <div className="ms-auto">
                        <Button
                          variant="secondary"
                          type="submit"
                          onClick={(e) => {
                            editAnswer(updateAnswer, token);
                          }}
                        >
                          Save
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="outline-danger"
                          onClick={(e) => {
                            handleDeleteAnswer();
                            navigate("/myanswers");
                          }}
                        >
                          Delete Question
                        </Button>
                      </div>
                    </Stack>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Panel>
        </>
      )}
    </div>
  );
}

export default Answers;
