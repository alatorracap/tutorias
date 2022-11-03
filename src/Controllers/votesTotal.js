//! arreglar los answers y como retorna los votoss

function votesTotal(answer, id) {
  console.log("answer", answer);
  let total = 0;
  console.log("initializing total", total);
  //* votes es el numero total de votos
  let votes = 0;

  answer.votes.map((x) => {
    if (x.answer_id === id) {
      total += Number(x.vote);
      console.log("sussy total", total);

      ++votes;
    }
  });
  console.log("total", total);
  console.log("votes", votes);

  const media = total / votes;
  // console.log("media", media);
  return [media, votes];
}

export default votesTotal;
