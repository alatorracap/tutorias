async function answerVotes(id) {
  console.log("entro answer votes");

  const votesData = await fetch(
    "http://localhost:" + process.env.REACT_APP_PORT + "/votes/" + id,
    { method: "GET" }
  );
  console.log("votesData", votesData);
  const media = votesData.media;

  return media;
}

export default answerVotes;
