import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ModalSignup from "../SignUp/ModalSignup";
import AlejandriaNavbar from "../Navbar/Navbar";
import AlejandriaModal from "../Components/AlejandriaModal";
import ModalLogin from "../Login/ModalLogin";

function Header() {
  const user = useSelector((s) => s.user);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <AlejandriaNavbar
        setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
      />
      <ModalLogin show={showLogin} setShow={setShowLogin} />

      <AlejandriaModal
        title="Sign up"
        show={showSignUp}
        setShow={setShowSignUp}
      >
        <ModalSignup />
      </AlejandriaModal>
    </>
  );
}

export default Header;
