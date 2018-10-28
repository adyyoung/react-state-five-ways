const initialState = {
  questions: [
    {
      id: '000',
      question: ''
    }
  ],
  questionValue: ''
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return {
        ...state,
        questions: action.payload.questions
      };

    case 'REMOVE_QUESTION':
      return {
        ...state,
        questions: state.questions.filter(item => item.id !== action.payload.id)
      };

    case 'HANDLE_QUESTION_QUESTION':
      return {
        ...state,
        questionValue: action.payload.questionValue
      };

    default:
      return state;
  }
};

export default questionsReducer;
