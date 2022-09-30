import useApi from "./useApi";

export const useQuestions = () => useApi('http://localhost:3003/questions/',"GET")
export const useAnswers = (id) => useApi('http://localhost:3003/answers/'+id,"GET")
