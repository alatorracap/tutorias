import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";
import { useUser } from "../hooks/api";

function User() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;

  let { id } = useParams();

  console.log("newData", newData);
  // //const User = useUser(id)
  const data = useFetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
    {
      headers: { Authorization: token },
    }
  );

  console.log("data", data);
  const User = data.data.result[0];
  //* confirma si el usuario actual es el mismo que el que se esta visitando
  const own = User.ID === newData.data.info.id ? true : false;
  console.log("own", own);

  return (
    <div>
      {data !== null && (
        <div class="card" className="UserCard">
          User
          {User && (
            <div class="card-body">
              <h5 class="card-title">User ID: {User.ID}</h5>
              <p>Username: {User.Username}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// function User() {
//   const { id } = useParams();
//   console.log("id", id);
//   const user = useFetch("http://localhost:3000/users/" + id, {
//     headers: { Authorization: token },
//   });

//   const newOne = user.data.result[0];
//   console.log("newOne", newOne);
//   useEffect(() => {});
//   return (
//     <>
//       {/*
//       <div>{user}</div>
//        <div>{newOne.Username}</div>
//       <div>{newOne.Email}</div>
//       <div>{newOne.userRole}</div>
//       <div>{newOne.Technology}</div> */}
//       {newOne && <div>{newOne.username}</div>}
//     </>
//   );
// }

export default User;
