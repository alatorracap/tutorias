import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../store";
import "./Signup.css";

function Singup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [technology, setTechnology] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        userRole,
        technology,
      }),
    });

    if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log("data", data);
      //dispatch(userLogin(data))
      // setUser(data)
    }
    /* e.preventDefault();
    console.log("e", e);

    const user = {
      email: email,
      token: password,
    };
    dispatch(userLogin(user)); */
  };

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
      <button on onClick={handleLogin}>
        Registrarse
      </button>
    </form>
  );
}

export default Singup;
