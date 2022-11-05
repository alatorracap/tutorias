async function editAnswer(answer, token) {
  const data = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/answers/" + answer[0],
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        answer: answer[1],
      }),
    }
  );
}

export default editAnswer;
