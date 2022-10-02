import useApi from "./useApi";

// const { PORT } = process.env;

export const useQuestions = () =>
  useApi(`http://localhost:3000/questions/`, "GET");

export const useUsers = () => useApi("http://localhost:3000/users/", "GET");
export const useUser = (id) =>
  useApi("http://localhost:3000/users/" + id, "GET");

export const useAnswers = (id) =>
  useApi("http://localhost:3000/answers/" + id, "GET");
