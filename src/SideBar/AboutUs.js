//import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Button, Col, Container } from "react-bootstrap";

function AboutUs() {
  //const user = useSelector((s) => s.user);
  const header1 = <img alt="Card" src="images/usercard.png" />;
  const header2 = <img alt="Card" src="images/usercard.png" />;
  const header3 = (
    <img alt="Card" src="/public/images/IMG_20220708_181445.jpg" />
  );
  const footer1 = <span className="fa fa-linkedin-square" aria-hidden="true" />;
  const footer2 = <span className="fa fa-linkedin-square" aria-hidden="true" />;
  const footer3 = <span className="fa fa-linkedin-square" aria-hidden="true" />;

  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Col>
          <Card footer={footer1} header={header1}>
            <h3>Name</h3>
            <p>Description</p>
          </Card>
        </Col>
        <Col>
          <Card footer={footer2} header={header2}>
            <h3>Alejandra Latorraca</h3>
            <p>Full Stack Web Developer, Programmer & Analyst </p>
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
