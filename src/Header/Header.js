import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import QuestionSearch from "../Navbar/QuestionSearch";

import NavbarLoginSignup from "../Login/NavbarLoginSignup";

import Modal from "../Components/AlejandriaModal";
import Login from "../Login/Login";
import ModalSignup from "../SignUp/ModalSignup";
import { Link } from "react-router-dom";
import AlejandriaNavbar from "../Navbar/Navbar";
import AlejandriaModal from "../Components/AlejandriaModal";
import { Button } from "react-bootstrap";
import { userLogout } from "../store";

function Header() {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {user && (
        <div>
          <AlejandriaNavbar
            setShowLogin={setShowLogin}
            setShowSignUp={setShowSignUp}
          />
        </div>
      )}
      {!user && (
        <>
          <AlejandriaNavbar
            setShowLogin={setShowLogin}
            setShowSignUp={setShowSignUp}
          />
          <AlejandriaModal
            title="Log in"
            show={showLogin}
            setShow={setShowLogin}
          >
            <Login />
          </AlejandriaModal>

          <AlejandriaModal
            title="Sign up"
            show={showSignUp}
            setShow={setShowSignUp}
          >
            <ModalSignup />
          </AlejandriaModal>
        </>
      )}
    </>
    // <>

    /* <h1>Tutorias</h1>
      {user && (
        <div>
          {user.data.email}
          <button onClick={() => dispatch(userLogout())}>Salir</button>
        </div>
      )}
      {!user && (
        <>
          <div>
            <Login />
          </div>
          <div>
            { <NavLink to="/signup">Registrate</NavLink> }
            <Singup />
          </div>
        </>
      )} */
    // </>
  );
}

export default Header;
