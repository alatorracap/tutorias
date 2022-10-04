import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Answers from "./Answers/Answers";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import QuestionList from "./Question/QuestionList";
import NewQuestion from "./Question/NewQuestion";
import Sidebar from "./SideBar/Sidebar";

function App(props) {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div className="App">
        <Sidebar />
      </div>
      <main>
        <ErrorBoundary
          key={location.pathname}
          fallback={<h1>Sección rota...</h1>}
        >
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/answers/:id" element={<Answers />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/questions/new" element={<NewQuestion />} />
            {/* <Route path="/signup" element={<Singup />} /> */}
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
