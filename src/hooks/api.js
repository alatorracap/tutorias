import useApi from "./useApi";
import useFetch from "fetch-suspense";
//const dotenv = require("dotenv");

// const { PORT } = process.env;

let host = "http://localhost:";

const newData = JSON.parse(
  localStorage.getItem("redux_localstorage_simple_user")
);
const token = newData.data.token;

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

export const useNewAnswer = (data) =>
  useFetch("http://localhost:" + process.env.REACT_APP_PORT + "/answers/", {
    method: "POST",
    headers: { Authorization: token },
    body: JSON.stringify({
      data,
    }),
  });
