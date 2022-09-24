import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../store";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3003/users/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      // TODO: Manejar error
    } else {
      const data = await res.json();
      console.log('data', data)
      dispatch(userLogin(data));
      localStorage.setItem('session', data.data.token)

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
    <form>
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
      <button on onClick={handleLogin}>
        Iniciar sesión
      </button>
    </form>
  );
}

export default Login;
