import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import QuestionsList from 'components/QuestionsList';
import Question from 'components/Question';
import { QuestionsContext } from './QuestionsContext';
import cxs from 'cxs';

const mainClassName = cxs({
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  height: '100vh',
  backgroundColor: '#f5f7f8'
});

const appBar = cxs({
  backgroundColor: '#FFF',
  padding: '1rem',
  color: '#000',
  fontSize: '1.25rem',
  borderBottom: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'flex-start'
});

const headerClassName = cxs({
  margin: 0,
  fontFamily: 'Helvetica',
  fontWeight: 100,
  lineHeight: 1
});

const getQuestions = new Promise((resolve) => {
  resolve([
    {
      'id': '123',
      'question': "What's the craic?"
    },
    {
      'id': '124',
      'question': "Ye well?"
    },
    {
      'id': '125',
      'question': "What's the weather like?"
    },
    {
      'id': '126',
      'question': "Some day for it, isn't it?"
    }
  ]);
});

const reducer = (state, action) => {
  if (action.type === 'REMOVE_QUESTION') {
    return { ...state, questions: state.questions.filter((item) => item.id !== action.payload.id) };
  }

  if (action.type === 'FETCH_QUESTIONS') {
    return { ...state, questions: action.payload.questions };
  }

  return state;
};

class App extends Component {
  state = {
    questions: [
      {
        'id': '000',
        'question': ''
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  componentDidMount () {
    getQuestions.then((data) => {
      const newData = data.filter((item) => !item.answer);

      this.state.dispatch({ type: 'FETCH_QUESTIONS', payload: { questions: newData } });
    })
  }

  render() {
    return (
      <QuestionsContext.Provider value={this.state}>
        <div className={appBar}><h3 className={headerClassName}>React context</h3></div>
        <div className={mainClassName}>
          <Router>
            <Switch>
              <Route
                component={QuestionsList}
                exact
                path="/"
              />
              <Route
                component={Question}
                exact
                path="/question/:id"
              />
              <Route
                component={() => <div>404</div>}
              />
            </Switch>
          </Router>
        </div>
      </QuestionsContext.Provider>
    );
  };
};

document.querySelector('body').style.margin = 0;
document.documentElement.lang = 'en';
const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);
