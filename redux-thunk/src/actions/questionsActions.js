import { getQuestions } from '../apis/questionsApis';

const fetchQuestions = () => dispatch =>
  getQuestions.then(data => {
    const newData = data.filter(item => !item.answer);

    return dispatch({
      type: 'FETCH_QUESTIONS',
      payload: { questions: newData }
    });
  });

const sendAnswer = id => ({ type: 'REMOVE_QUESTION', payload: { id } });

const handleChange = questionValue => ({
  type: 'HANDLE_QUESTION_QUESTION',
  payload: { questionValue }
});

export default {
  fetchQuestions,
  sendAnswer,
  handleChange
};
