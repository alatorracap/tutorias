import useFetch from 'fetch-suspense'


function Question() {


  const chars = useFetch('https://rickandmortyapi.com/api/character')
   console.log('res', chars)
  return <div>Question</div>;
}

export default Question;
