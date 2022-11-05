import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Stack } from "react-bootstrap";

function NewAnswer() {
  const [protoAnswer, setProtoAnswer] = useState("");
  const [answer, setAnswer] = useState("");

  //*Agarra el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  let token;
  if (newData) {
    token = newData.data.token;
  }

  // //* Verifica usuario
  const user = useSelector((s) => s.user);

  // //*agarra el parametro pasado al enlace
  let { id } = useParams();

  async function createNewAnswer(protoAnswer) {
    let answer = protoAnswer;
    console.log(answer);
    await fetch(
      "http://localhost:" + process.env.REACT_APP_PORT + "/answers/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          answer: answer,
          question_id: id,
        }),
      }
    )
      .then((data) => {
        if (data.ok) {
          window.location.reload();
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onClickSubmit = () => {
    setAnswer(protoAnswer);
    console.log(protoAnswer);
    while (protoAnswer === undefined) {
      console.log("soy bobo");
    }
    setAnswer(protoAnswer);
  };

  return (
    <>
      <Col>
        <Stack gap={1}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>New Answer:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={protoAnswer}
              onChange={(e) => {
                setProtoAnswer(e.target.value);
              }}
            />
          </Form.Group>

          <Stack direction="horizontal" gap={3}>
            <div className="ms-auto">
              <Button
                variant="secondary"
                onClick={() => createNewAnswer(protoAnswer)}
              >
                Submit
              </Button>
            </div>
            <div className="vr" />
            <div>
              <Button
                variant="outline-danger"
                onClick={() => setProtoAnswer("")}
              >
                Reset
              </Button>
            </div>
          </Stack>
        </Stack>
      </Col>
    </>
  );
}

export default NewAnswer;
