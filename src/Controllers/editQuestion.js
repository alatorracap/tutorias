async function editQuestion(question, token) {
  const data = await fetch(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/questions/" +
      question.ID,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        redirect: "follow",
      },
      body: JSON.stringify({
        title: question.Title,
        question: question.Question,
      }),
    }
  );
}

export default editQuestion;
