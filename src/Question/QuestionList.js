import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestions } from "../hooks/api";
import cellEditFactory from "react-bootstrap-table2";
import { BootstrapTable } from "react-bootstrap-table2";

function QuestionList() {
  //const { id } = useParams()
  const questions = useQuestions();
  console.log(questions);

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
      <BootstrapTable
        keyField="id"
        data={questions}
        columns={["Title"]}
        cellEdit={cellEditFactory({ mode: "click" })}
      />
    </div>
  );
}

export default QuestionList;
