import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../store";
import { handleLogin } from "../Login/Login";
import "./Signup.css";

function Singup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [technology, setTechnology] = useState("");

  return (
    <form className="formSignup">
      <label>
        Username:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        ></input>
      </label>
      <label>
        Email:
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        ></input>
      </label>
      <label>
        Contraseña:
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        ></input>
      </label>
      <label>
        Role:
        <input
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          name="userRole"
        ></input>
      </label>
      <label>
        Technology:
        <input
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          name="technology"
        ></input>
      </label>
      {/* esto de abajo funciona???? */}
      <button on onClick={handleLogin}>
        Registrarse
      </button>
    </form>
  );
}

export default Singup;
