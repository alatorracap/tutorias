import { useNavigate, useParams } from "react-router-dom";
import { useAnswers } from "../hooks/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  Alert,
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

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("danger");
  const [title, setTitle] = useState();

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
    ).then((res) => {
      console.log(res);
      if (!res.ok) {
        return res.text().then((text) => {
          setAlertSeverity("danger");
          setShowAlert(true);
          setErrorMessage(text);
          setTitle("Oh snap! You got an error!");
        });
      } else {
        console.log(res);
        res.json().then((data) => {
          setAlertSeverity("success");
          setErrorMessage(data.message);
          setShowAlert(true);
          setTitle("Nice!");
        });
        setTimeout(function () {
          if (alert) window.location.reload();
        }, 5000);
      }
    });
  };

  return (
    <div className="answersDiv">
      {Answers && (
        <>
          {console.log(Answers.data.Answer)}
          <Panel header={"Edit answer"}>
            <Container>
              <Row>
                <Col>
                  {showAlert && (
                    <Alert
                      variant={alertSeverity}
                      onClose={() => {
                        setShowAlert(false);
                        window.location.reload();
                      }}
                      dismissible
                      className="alert-fixed"
                    >
                      <Alert.Heading>{title}</Alert.Heading>
                      <p>{errorMessage}</p>
                    </Alert>
                  )}
                </Col>
              </Row>
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
                          onClick={(e) => {
                            editAnswer(updateAnswer, token).then((res) => {
                              if (!res.ok) {
                                return res.text().then((text) => {
                                  setAlertSeverity("danger");
                                  setShowAlert(true);
                                  setErrorMessage(text);
                                  setTitle("Oh snap! You got an error!");
                                  //throw new Error(text);
                                });
                              } else {
                                res.json().then((data) => {
                                  setAlertSeverity("success");
                                  setErrorMessage(data.message);
                                  setShowAlert(true);
                                  setTitle("Nice!");
                                });
                                setTimeout(function () {
                                  if (alert) window.location.reload();
                                }, 5000);
                              }
                            });
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
