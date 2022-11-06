async function editAnswer(answer, token) {
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
  ).then((res) => {
    return res;
  });
  return data;
}

export default editAnswer;
