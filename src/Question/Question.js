import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuestions } from '../hooks/api'


function Question() {
  
  const questions = useQuestions() 
  console.log('questions', questions)
  
    return (
    <div>Questions
   {questions && 
      <ul>
      {questions.data.map((q)=><li><Link to={`/answers/${q.ID}`} > {q.Title}</Link></li>)}
      </ul>
   }
    </div>
    )
}


export default Question;
