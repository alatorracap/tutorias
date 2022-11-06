import { useParams } from "react-router-dom";
// import useFetch from "fetch-suspense";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/api";
import { Panel } from "primereact/panel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function User() {
  //* se trae el token del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  let { id } = useParams();

  const data = useUser(id);

  if (data && data.data) {
    const User = data && data.data.result[0];
    const editLink = `/user/${User.ID}`;

    //* confirma si el usuario actual es el mismo que el que se esta visitando
    const own = User.ID === newData.data.info.id ? true : false;

    return (
      <div>
        {data !== null && (
          <div>
            {User && (
              <Container>
                <Panel header={User.Username}>
                  <p>Role: {User.UserRole}</p>
                  <p>Technology: {User.Technology}</p>
                  {own && (
                    <div>
                      <p>Email: {User.Email}</p>
                      <Button variant="secondary" href={editLink}>
                        Edit
                        {/* <Link to={`/user/${User.ID}`}>Edit</Link> */}
                      </Button>
                    </div>
                  )}
                </Panel>
              </Container>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default User;
