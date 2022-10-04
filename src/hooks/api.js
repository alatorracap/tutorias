import useApi from "./useApi";
//const dotenv = require("dotenv");

export const useQuestions = () =>
  useApi("http://localhost:3001/questions/", "GET");

export const useNewQuestion = () =>
  useApi("http://localhost:3001/questions/", "POST");

export const useAnswers = (id) =>
  useApi("http://localhost:3001/answers/" + id, "GET");
