import useApi from "./useApi";
import useFetch from "fetch-suspense";
//const dotenv = require("dotenv");

let host = "http://localhost:";

let headerAuthorization = "";

const newData = JSON.parse(
  localStorage.getItem("redux_localstorage_simple_user")
);
if (newData) {
  const token = newData.data.token;
  console.log("token", token);
  console.log("newData", newData);
  /* const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDc4ODU2NCwiZXhwIjoxNjY0ODc0OTY0fQ.rQ3DI1IxtXNpX9V-vE1R9hwboJImngl-uE8BYhPMd10"; */
  headerAuthorization = "Authorization: " + token;
}

export const useQuestions = (filter) =>
  useApi(
    host + process.env.REACT_APP_PORT + "/questions/",
    "GET",
    filter,
    headerAuthorization
  );

export const useUsers = () =>
  useApi(
    host + process.env.REACT_APP_PORT + "/users/",
    "GET",
    headerAuthorization
  );

export const useUser = (id) =>
  useApi(
    host + process.env.REACT_APP_PORT + "/users/" + id,
    "GET",
    headerAuthorization
  );

export const useAnswers = (id) =>
  useApi(
    host + process.env.REACT_APP_PORT + "/answers/" + id,
    "GET",
    headerAuthorization
  );

export const useNewQuestion = () =>
  useApi(host + process.env.REACT_APP_PORT + "/question/", "POST");

export const useNewAnswer = (data) =>
  useFetch("http://localhost:" + process.env.REACT_APP_PORT + "/answers/", {
    method: "POST",
    headers: { headerAuthorization },
    body: JSON.stringify({
      data,
    }),
  });
