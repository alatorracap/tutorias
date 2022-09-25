//import useFetch from 'fetch-suspense'
import { useQuestions } from '../hooks/api'
//import { Link } from 'react-router-dom';


function Question() {
  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDA5ODE4NSwiZXhwIjoxNjY0MTg0NTg1fQ.qFg_1DbhEBgd900OtFAsKnGBSWYJe0j4vBteIzYQqxY"
  //const metodo = "GET"
  const questions = useQuestions() /* useFetch('http://localhost:3001/questions/', 
  {headers: { 'Authorization': 'Bearer ' + token },
  method:metodo
  }) 
 
  console.log('Questions', questions)
 */
    return (
    <div className="allquestions">Questions
     {questions.data.map(q => 
     <>
     {console.log('q', q)}
      <ul>
      <li>{/* <Link to={`/answers/${q.ID}`} > {q.Title}</Link> */}{q.Title}</li>
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
