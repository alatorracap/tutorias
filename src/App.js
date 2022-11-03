import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes, useLocation } from "react-router-dom";
//import "./App.css";
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
import NewQuestion from "./Question/NewQuestion/NewQuestion";
import EditUser from "./User/EditUser";
import Questions from "./Question/Questions";

function App(props) {
  const location = useLocation();

  console.log(window);

  return (
    <div className="App">
      <Header />

      <div className="Main" style={{ background: "rgb(248, 249, 250)" }}>
        <Container fluid>
          <Row>
            <Col style={{ display: "contents" }}>
              <Sidebar />
            </Col>
            <Col>
              <ErrorBoundary
                key={location.pathname}
                fallback={<h1>Sección rota...</h1>}
              >
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/answers/:id" element={<Answers />} />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="/question/:id" element={<Question />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/:id" element={<User />} />
                  <Route path="/question/" element={<NewQuestion />} />
                  <Route path="/user/:id" element={<EditUser />} />
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
