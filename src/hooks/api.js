import useApi from "./useApi";
import useFetch from "fetch-suspense";
//const dotenv = require("dotenv");

let host = "http://localhost:";

// let token = "";

const newData = JSON.parse(
  localStorage.getItem("redux_localstorage_simple_user")
);

let token = "";
if (newData !== undefined && newData !== null && newData.data) {
  token = newData.data.token;
}

console.log("token api" + token);

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

export const useMyAnswer = (user_id) =>
  useApi(
    "http://localhost:" + process.env.REACT_APP_PORT + "/myanswers/" + user_id,
    "GET"
  );

/* export const useMyQuestions = (user_id) =>
  useApi(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/myquestions/" +
      user_id,
    "GET"
  ); */

export const useMyQuestion = (user_id) =>
  useApi(
    "http://localhost:" +
      process.env.REACT_APP_PORT +
      "/questions/?User_ID=" +
      user_id,
    "GET"
  );
