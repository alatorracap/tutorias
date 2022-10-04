import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import QuestionSearch from "../Navbar/QuestionSearch";
<<<<<<< HEAD
import NavbarLoginSignup from "../Login/NavbarLoginSignup";
=======

import NavbarLoginSignup from "../Login/NavbarLoginSignup";

>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
import Modal from "../Components/AlejandriaModal";
import Login from "../Login/Login";
import ModalSignup from "../SignUp/ModalSignup";
import { Link } from "react-router-dom";
import AlejandriaNavbar from "../Navbar/Navbar";
import AlejandriaModal from "../Components/AlejandriaModal";
import { Button } from "react-bootstrap";
<<<<<<< HEAD
=======
import { userLogout } from "../store";
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e

function Header() {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
<<<<<<< HEAD
      <AlejandriaNavbar
        setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
      />
      <AlejandriaModal title="Log in" show={showLogin} setShow={setShowLogin}>
        <Login />
      </AlejandriaModal>

      <AlejandriaModal
        title="Sign up"
        show={showSignUp}
        setShow={setShowSignUp}
      >
        <ModalSignup />
      </AlejandriaModal>
=======
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
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
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
