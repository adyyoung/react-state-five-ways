import React, { useState, useEffect } from 'react';
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import QuestionsList from 'components/QuestionsList';
import Question from 'components/Question';
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

  const App = (props) => {
    const [questions, setQuestions] = useState([{ id: '000', question: '' }]);

    useEffect(() => {
      getQuestions.then((data) => {
        const newData = data.filter((item) => !item.answer);
  
        setQuestions(newData);
      })
    }, []);

    const sendAnswer = (id) => {
      window.location.hash = '';
      setQuestions(questions.filter((item) => item.id !== id))
    };

    return (
      <div>
        <div className={appBar}><h3 className={headerClassName}>React hooks</h3></div>
        <div className={mainClassName}>
          <Router>
            <Switch>
              <Route
                component={(props) => <QuestionsList {...props} questions={questions} />}
                exact
                path="/"
              />
              <Route
                component={(props) => <Question {...props} sendAnswer={sendAnswer} questions={questions} />}
                exact
                path="/question/:id"
              />
              <Route
                component={() => <div>404</div>}
              />
            </Switch>
          </Router>
        </div>
        </div>
    );
  };
  

document.querySelector('body').style.margin = 0;
document.documentElement.lang = 'en';
const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);
