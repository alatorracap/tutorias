import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { Panel } from "primereact/panel";

function NewQuestion() {
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("danger");
  const [alertTitle, setAlertTitle] = useState();

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
    await fetch(
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
    )
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            console.log(text);
            setAlertSeverity("danger");
            setShowAlert(true);
            setErrorMessage(text);
            setTitle("Oh snap! You got an error!");
            //throw new Error(text);
          });
        } else {
          console.log(res);
          res.json().then((data) => {
            //setShow(false);
            console.log(data);
            setAlertSeverity("success");
            setErrorMessage(data.message);
            setShowAlert(true);
            setTitle("Nice!");
          });
          setTimeout(function () {
            window.location.reload();
          }, 5000);
        }
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  };

  return (
    <>
      {user && (
        <Form>
          <Panel header="New Question">
            <Container>
              <Row>
                <Col>
                  {showAlert && (
                    <Alert
                      variant={alertSeverity}
                      onClose={() => {
                        setShowAlert(false);
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
                      <Button variant="secondary" onClick={handleNewQuestion}>
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
