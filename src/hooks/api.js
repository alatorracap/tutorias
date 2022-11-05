import useApi from "./useApi";
import useFetch from "fetch-suspense";
//const dotenv = require("dotenv");

let host = "http://localhost:";

// let token = "";

const newData = JSON.parse(
  localStorage.getItem("redux_localstorage_simple_user")
);

let token = "";
if (newData) {
  token = newData.data.token;
}

export const useQuestions = (filter) =>
  useApi(
    host + process.env.REACT_APP_PORT + "/questions/",
    "GET",
    token,
    filter
  );

export const useUsers = () =>
  useApi(host + process.env.REACT_APP_PORT + "/users/", "GET", token);

export const useUser = (id) =>
  useApi(host + process.env.REACT_APP_PORT + "/users/" + id, "GET", token);

export const useAnswers = (id) =>
  useApi(host + process.env.REACT_APP_PORT + "/answers/" + id, "GET", token);

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

export const useMyAnswer = (user_id) =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/myanswers/" + user_id,
    "GET",
    token
  );

export const useMyQuestion = (user_id) =>
  useApi(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/questions/?User_ID=" +
      user_id,
    "GET",
    token
  );
