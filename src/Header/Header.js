import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../store";
import Login from "../Login/Login";
import Singup from "../SignUp/Signup";
import { NavLink } from "react-router-dom";

function Header() {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Tutorias</h1>
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
            {/* <NavLink to="/signup">Registrate</NavLink> */}
            <Singup />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
