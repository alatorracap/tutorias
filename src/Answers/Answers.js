import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'


function Answers () {
  const { id } = useParams()
  const [url,setUrl] = useState("http://localhost:3003/answers/"+id)
  console.log('url', url)
  const [metodo,setMetodo] = useState("GET")
  const Answers = useApi(url,metodo)
  
  const handleEvendDelete=(id)=>{
    setMetodo("DELETE")
    setUrl('http://localhost:3003/answers/'+id) 
    console.log('url2', url)
  }

    return (
      <div>
        
        {Answers && 
        <div>
          {Answers.data.map((q,index) =>
          <>
          {console.log('q', q)}
            <ul>
              <li key={index}>{q.Answer}<button onClick={()=>handleEvendDelete(q.ID)}>Borrar</button></li>
            </ul>
          </>)
          }   
        </div>
}</div>  
        )
}


export default Answers;
