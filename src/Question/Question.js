import useFetch from 'fetch-suspense'


function Question() {
  const questions = useFetch('http://localhost:3001/questions/')

  console.log('Questions', questions)

    return (
    <div className="allquestions">Questions
     {questions.data.map(q => 
     <>
     {console.log('q', q)}
      <ul>
      <li>{q.Title}</li>
      </ul>
      </>)
      }
    </div>
    )
}
  /* const questions = useFetch('http://localhost:3001/questions/')
   console.log('res', questions)
  return */

export default Question;
