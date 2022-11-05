import { useParams } from "react-router-dom";
// import useFetch from "fetch-suspense";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/api";
import { Panel } from "primereact/panel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function User() {
  console.log("entro al user");
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );
  const token = newData.data.token;
  // const [data, setData] = useState({});

  let { id } = useParams();

  console.log(id);

  console.log("newData", newData);
  // //const User = useUser(id)
  console.log(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id
  );

  const data = useUser(id);
  console.log(data);

  // function getUser() {
  //   console.log("AAAAAAAAAAAAAAAAAAAAA");
  //   (async () => {
  //     //* se trae el token del local storage

  //     const res = await fetch(
  //       "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
  //       {
  //         headers: { Authorization: token },
  //         method: "GET",
  //       }
  //     );
  //     console.log("res", res);
  //     if (res.status === 401) {
  //       console.log("res.status", res.status);
  //       console.log("ERRORRRR");
  //     } else {
  //       const data = await res.json();
  //       setData(data);
  //       console.log("data", data);
  //     }
  //   })();
  // const res = fetch(
  //   "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
  //   {
  //     headers: { Authorization: token },
  //     method: "GET",
  //   }
  // ).then((res) => {
  //   const data = res.json();
  //   console.log(data.data);
  //   if (data.ok) {
  //     //window.location.reload();
  //     setData(data);
  //   } else {
  //     console.log(data);
  //   }
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });
  // });
  // }
  // const data = useFetch(
  //   "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
  //   {
  //     headers: { Authorization: token },
  //   }
  // );

  //getUser();
  if (data && data.data) {
    const User = data && data.data.result[0];
    const editLink = `/user/${User.ID}`;

    console.log("data", data);
    // const User = data.data.result[0];
    //* confirma si el usuario actual es el mismo que el que se esta visitando
    const own = User.ID === newData.data.info.id ? true : false;
    console.log("own", own);
    console.log("user", User);

    return (
      <div>
        {data !== null && (
          <div>
            {User && (
              <Panel header={User.Username}>
                <p>Role: {User.UserRole}</p>
                <p>Technology: {User.Technology}</p>
                {own && (
                  <div>
                    <p>Email: {User.Email}</p>
                    <Button variant="primary" href={editLink}>
                      Editar
                      {/* <Link to={`/user/${User.ID}`}>Edit</Link> */}
                    </Button>
                  </div>
                )}
              </Panel>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default User;
