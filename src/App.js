import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Answers from "./Answers/Answers";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Question from "./Question/Question";
import Sidebar from "./SideBar/Sidebar";
import Users from "./User/Users";
import User from "./User/User";
import { Col, Container, Row, Stack } from "react-bootstrap";

function App(props) {
  const location = useLocation();
  const sid = { "grid-area": "sidebar" };

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Container fluid>
          <Row>
            <Col
              md="auto"
              style={{ display: "contents", height: "max-content" }}
            >
              <Sidebar />
            </Col>
            <Col md={10}>
              <ErrorBoundary
                key={location.pathname}
                fallback={<h1>Sección rota...</h1>}
              >
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/answers/:id" element={<Answers />} />
                  <Route path="/questions" element={<Question />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/:id" element={<User />} />
                  {/* <Route path="/questions/" element={<NewQuestion />} />  Este rompe*/}
                  {/* <Route path="/signup" element={<Singup />} /> */}
                </Routes>
              </ErrorBoundary>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
