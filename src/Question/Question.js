import useFetch from 'fetch-suspense'
import { Link } from 'react-router-dom';


function Question() {
  const questions = useFetch('http://localhost:3003/questions/')

  console.log('Questions', questions)

    return (
    <div className="allquestions">Questions
     {questions.data.map(q => 
     <>
     {console.log('q', q)}
      <ul>
      <li><Link to={`/answers/${q.ID}`} > {q.Title}</Link></li>
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
