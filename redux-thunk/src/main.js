import React, { Component, Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import QuestionsList from 'components/QuestionsList';
import Question from 'components/Question';
import cxs from 'cxs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import questionsActions from './actions/questionsActions';

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

class Main extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
        <Fragment>
          <div className={appBar}><h3 className={headerClassName}>Redux thunk</h3></div>
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
        </Fragment>
    );
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...questionsActions }, dispatch);
};

export default connect(null, mapDispatchToProps)(Main);
