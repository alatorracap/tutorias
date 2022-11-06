//import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Col, Container, Stack } from "react-bootstrap";
import logo from "../Img/IMG_20220708_181445.jpg";
import ale from "../Img/Alejandra_Icon.jpg";
import inaki from "../Img/Inaki_icon.jpg";
import "./AboutUs.css";
function AboutUs() {
  //const user = useSelector((s) => s.user);
  const header1 = <img alt="Card" src={inaki} />;
  const header2 = <img alt="Card" src={ale} />;
  const header3 = <img alt="Card" src={logo} />;
  const footer1 = (
    <Stack gap={3}>
      <div>inakipf@gmail.com</div>
      <div>
        <a href="https://www.linkedin.com/in/inakiperezfernandez/">
          <i className="pi pi-linkedin" style={{ fontSize: "2rem" }}></i>
        </a>
      </div>
    </Stack>
  );

  const footer2 = (
    <Stack gap={3}>
      <div>alatorracap@gmail.com</div>
      <div>
        <a href="https://www.linkedin.com/in/alejandra-latorraca-poblacion/">
          <i className="pi pi-linkedin" style={{ fontSize: "2rem" }}></i>
        </a>
      </div>
    </Stack>
  );
  const footer3 = (
    <Stack gap={3}>
      <div>mariocollaralv@gmail.com</div>
      <div>
        <a href="https://www.linkedin.com/in/mariocollaralvarez">
          <i className="pi pi-linkedin" style={{ fontSize: "2rem" }}></i>
        </a>
      </div>
    </Stack>
  );
  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Col>
          <Card footer={footer1} header={header1}>
            <h3>Iñaki Pérez Fernández</h3>
            <p>
              Full Stack Developer & System Administrator - HTML5, CSS,
              Javascript, REACT, NODE
            </p>
          </Card>
        </Col>
        <Col>
          <Card footer={footer2} header={header2}>
            <h3>Alejandra Latorraca Población</h3>
            <p>
              Full Stack Web Developer, Programmer & Analyst - HTML5, CSS,
              Javascript, React, Node
            </p>
          </Card>
        </Col>
        <Col>
          <Card footer={footer3} header={header3}>
            <h3>Mario Collar Álvarez</h3>
            <p>
              Full Stack Developer and Graphic Designer - JavaScript, Html5,
              Css, Node, Sql, React
            </p>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default AboutUs;
