import { takeEvery } from 'redux-saga/effects';
import { fetchQuestions } from './questionsSaga';

export default function* root() {
  yield takeEvery('ASYNC_FETCH_QUESTIONS', fetchQuestions)
}