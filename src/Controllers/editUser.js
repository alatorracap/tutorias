async function userEdit(token, user) {
  const data = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: /* "Bearer " + */ token,
      },
      body: JSON.stringify({
        username: user[0],
        email: user[1],
        userRole: user[3],
        technology: user[4],
      }),
    }
  );
  console.log("==============inside Data of user==============", data);
}

// async function deleteUser(token, user) {}

export default userEdit;
