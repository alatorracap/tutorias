async function editQuestion(question, token) {
  const data = await fetch(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/questions/" +
      question[0],
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        Title: question[1],
        Question: question[2],
      }),
    }
  );
}

export default editQuestion;
