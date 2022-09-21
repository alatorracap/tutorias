import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../store";
import Login from "../Login/Login";

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
         <Login />
        </div>
        </>
      )}
    </>  
   
  );
}

export default Header;
