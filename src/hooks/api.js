import useApi from "./useApi";

export const useQuestions = () => useApi('http://localhost:3001/questions/')
