async function editAnswer(answer, token) {
  console.log(answer);
  const data = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/answers/" + answer.id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        answer: answer.answer,
      }),
    }
  );
}

export default editAnswer;
