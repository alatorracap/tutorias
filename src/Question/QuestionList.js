import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestions } from "../hooks/api";

function QuestionList() {
  //const { id } = useParams()
  const questions = useQuestions();

  console.log("questions", questions);

  return (
    <div>
      Questions
      {questions && (
        <ul>
          {questions.data.map((q, index) => (
            <li key={index}>
              <Link to={`/answers/${q.ID}`}> {q.Title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionList;
