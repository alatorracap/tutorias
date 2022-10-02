import { useParams } from "react-router-dom";
import useFetch from "fetch-suspense";
import { useEffect } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDU1NTI5NywiZXhwIjoxNjY0NjQxNjk3fQ.llJkwFC4O9pVVNRLJiKuKdS-S5VOl46OcqYAZDeXJh8";

function User() {
  const { id } = useParams();
  console.log("id", id);
  const user = useFetch("http://localhost:3000/users/" + id, {
    headers: { Authorization: token },
  });

  const newOne = user.data.result[0];
  console.log("newOne", newOne);
  useEffect(() => {});
  return (
    <>
      {/*
      <div>{user}</div>
       <div>{newOne.Username}</div>
      <div>{newOne.Email}</div>
      <div>{newOne.userRole}</div>
      <div>{newOne.Technology}</div> */}
      {newOne && <div>{newOne.username}</div>}
    </>
  );
}

export default User;
