import { Suspense } from 'react'
import Loading from './Loading/Loading'
import ErrorBoundary from './ErrorBoundary'
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Question from "./Question/Question";
import Singup from "./SignUp/Signup";

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <ErrorBoundary key={location.pathname} fallback={<h1>Sección rota...</h1>}>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
