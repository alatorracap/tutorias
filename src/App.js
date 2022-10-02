import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Question from "./Question/Question";
import Singup from "./SignUp/Signup";
import Answers from "./Answers/Answers";
import Users from "./User/Users";
import User from "./User/User";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <ErrorBoundary
        key={location.pathname}
        fallback={<h1>Sección rota...</h1>}
      >
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/answers/:id" element={<Answers />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
