import { getQuestions } from '../apis/questionsApis';


const fetchQuestions = () => (dispatch) =>
 getQuestions.then((data) => {
  const newData = data.filter((item) => !item.answer);

  return dispatch({ type: 'FETCH_QUESTIONS', payload: { questions: newData } });
})

const sendAnswer = (id) => (dispatch) => (
  dispatch({ type: 'REMOVE_QUESTION', payload: { id } })
);

export default {
  fetchQuestions,
  sendAnswer
};
