import { put, call } from 'redux-saga/effects';
import { getQuestions } from '../apis/questionsApis';

export function *fetchQuestions () {
  try {
    const response = yield call(getQuestions);
    yield put({type: "FETCH_QUESTIONS", payload: {questions: response.filter((item) => !item.answer)}});
  } catch (e) {
    // TODO
  }

};
