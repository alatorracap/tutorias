import useApi from "./useApi";
//const dotenv = require("dotenv");

// const { PORT } = process.env;

export const useQuestions = () =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/questions/",
    "GET"
  );

export const useUsers = () =>
  useApi("http://localhost:" + process.env.REACT_APP_PORT + "/users/", "GET");
export const useUser = (id) =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/users/" + id,
    "GET"
  );

export const useAnswers = (id) =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/answers/" + id,
    "GET"
  );
export const useNewQuestion = () =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/questions/",
    "POST"
  );
