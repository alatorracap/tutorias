import useApi from "./useApi";
//const dotenv = require("dotenv");

<<<<<<< HEAD
export const useQuestions = () =>
  useApi("http://localhost:3001/questions/", "GET");

export const useNewQuestion = () =>
  useApi("http://localhost:3001/questions/", "POST");

export const useAnswers = (id) =>
  useApi("http://localhost:3001/answers/" + id, "GET");
=======
// const { PORT } = process.env;

export const useQuestions = () =>
  useApi(`http://localhost:3000/questions/`, "GET");

export const useUsers = () => useApi("http://localhost:3000/users/", "GET");
export const useUser = (id) =>
  useApi("http://localhost:3000/users/" + id, "GET");

export const useAnswers = (id) =>
  useApi("http://localhost:3000/answers/" + id, "GET");
export const useNewQuestion = () =>
  useApi("http://localhost:3001/questions/", "POST");
>>>>>>> f3670bfd32f586424c78429e4ccb83fb8165586e
