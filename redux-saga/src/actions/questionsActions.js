const fetchQuestions = () => ({ type: 'ASYNC_FETCH_QUESTIONS' });

const sendAnswer = (id) => (
  { type: 'REMOVE_QUESTION', payload: { id } }
);

const handleChange = questionValue => ({
  type: 'HANDLE_QUESTION_QUESTION',
  payload: { questionValue }
});

export default {
  fetchQuestions,
  sendAnswer,
  handleChange
};
