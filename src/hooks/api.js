import useApi from "./useApi";
//const dotenv = require("dotenv");

// const { PORT } = process.env;

let host = "http://localhost:";

export const useQuestions = (filter) =>
  useApi(host + process.env.REACT_APP_PORT + "/questions/", "GET", filter);

export const useUsers = () =>
  useApi(host + process.env.REACT_APP_PORT + "/users/", "GET");

export const useUser = (id) =>
  useApi(host + process.env.REACT_APP_PORT + "/users/" + id, "GET");

export const useAnswers = (id) =>
  useApi(host + process.env.REACT_APP_PORT + "/answers/" + id, "GET");
export const useNewQuestion = () =>
  useApi(host + process.env.REACT_APP_PORT + "/question/", "POST");
