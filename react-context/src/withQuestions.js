import React from 'react';
import { QuestionsContext } from './QuestionsContext';

const withQuestions = Component => {
  return props => {
    return (
      <QuestionsContext.Consumer>
        {({questions, dispatch}) => <Component {...props} questions={questions} dispatch={dispatch} />}
      </QuestionsContext.Consumer>
    );
  };
};

export default withQuestions;
