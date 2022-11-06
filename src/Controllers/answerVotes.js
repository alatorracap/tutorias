async function answerVotes(id) {
  const votesData = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/votes/" + id,
    { method: "GET" }
  );
  const media = votesData.media;

  return media;
}

export default answerVotes;
