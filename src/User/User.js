import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";
import { useUser } from "../hooks/api";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDc4ODU2NCwiZXhwIjoxNjY0ODc0OTY0fQ.rQ3DI1IxtXNpX9V-vE1R9hwboJImngl-uE8BYhPMd10";
function User() {
  let { id } = useParams();

  // console.log("id", id);
  // //const User = useUser(id)
  // const data = useFetch(
  //   "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
  //   {
  //     headers: { Authorization: token },
  //   }
  // );

  // console.log("data", data);
  // const User = data.data.result[0];

  return (
    <div class="card" className="UserCard">
      User
      {User && (
        <div class="card-body">
          <h5 class="card-title">User ID: {User.ID}</h5>
          <p>Username: {User.Username}</p>
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
