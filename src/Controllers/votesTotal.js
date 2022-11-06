//! arreglar los answers y como retorna los votoss

function votesTotal(answer, id) {
  let total = 0;
  //* votes es el numero total de votos
  let votes = 0;

  answer.votes.map((x) => {
    if (x.answer_id === id) {
      total += Number(x.vote);

      ++votes;
    }
  });

  const media = total / votes;
  return [media, votes];
}

export default votesTotal;
