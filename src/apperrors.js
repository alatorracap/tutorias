import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes, useLocation } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col, Container, Row, Stack } from "react-bootstrap";
//*our code
import Header from "./Header/Header";
import Answers from "./Answers/Answers";
import Questions from "./Question/Questions";
import Sidebar from "./SideBar/Sidebar";
import Users from "./User/Users";
import User from "./User/User";
import EditUser from "./User/EditUser";
import Question from "./Question/Question";
import NewQuestion from "./Question/NewQuestion/NewQuestion";
import "./App.css";

function App(props) {
  const location = useLocation();
  const sid = { "grid-area": "sidebar" };

  return (
    <div className="App">
      <Header />
      <div>
        <Container fluid>
          <Row className="Main">
            <Col
              md="auto"
              style={{ display: "contents", height: "max-content" }}
            >
              <Sidebar className="sidebar" />
            </Col>
            <Col md={10} className="main-content">
              <ErrorBoundary
                key={location.pathname}
                fallback={<h1>Sección rota...</h1>}
              >
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/answers/:id" element={<Answers />} />
                  <Route path="/question/:id" element={<Question />} />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="/newQuestion" element={<NewQuestion />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/:id" element={<User />} />
                  <Route path="/user/:id" element={<EditUser />} />
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
