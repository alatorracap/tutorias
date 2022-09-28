import { useParams } from 'react-router-dom'
import { useAnswers } from '../hooks/api'


function Answers () {
  const { id } = useParams()
  const Answers = useAnswers(id)
  
 /*  const handleEvendDelete=(id)=>{
    setMetodo("DELETE")
    setUrl('http://localhost:3001/answers/'+id) 
    console.log('url2', url)
  } */

    return (
      <div>
        
        {Answers && 
        <div>
          {Answers.data.map((q,index) =>
          <>
          {console.log('q', q)}
            <ul>
              <li key={index}>{q.Answer}</li>
            </ul>
          </>)
          }   
        </div>
}</div>  
        )
}


export default Answers;
