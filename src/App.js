import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Question from "./Question/Question";
import Singup from "./SignUp/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
