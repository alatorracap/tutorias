async function userEdit(token, user) {
  let response = {};
  const data = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
  )
    .then((res) => {
      console.log(res);
      response = res;
      return res;
    })
    .catch((err) => {
      console.log("caught it!", err);
    });
  console.log("==============inside Data of user==============", data);
  return response;
}

// async function deleteUser(token, user) {}

export default userEdit;
