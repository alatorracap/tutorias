async function userEdit(token, user) {
  console.log(user);
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
        userRole: user[2],
        technology: user[3],
        oldPassword: user[4],
        newPassword: user[5],
        repeatNewPassword: user[6],
      }),
    }
  );
  console.log("==============inside Data of user==============", data);
}

// async function deleteUser(token, user) {}

export default userEdit;
