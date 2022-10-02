import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store";
import Login from "../Login/Login";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();

  return (
    <div className="appHeader">
      <h1>
        {" "}
        <NavLink className="headerName" to="/">
          Tutorias
        </NavLink>{" "}
      </h1>
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
            {
              <NavLink className="signupNav" to="/signup">
                Registrate
              </NavLink>
            }
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
