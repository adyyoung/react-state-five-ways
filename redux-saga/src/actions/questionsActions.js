// import { getQuestions } from '../apis/questionsApis';


const fetchQuestions = () => ({ type: 'ASYNC_FETCH_QUESTIONS' });

const sendAnswer = (id) => (
  { type: 'REMOVE_QUESTION', payload: { id } }
);

export default {
  fetchQuestions,
  sendAnswer
};
