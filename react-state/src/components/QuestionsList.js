import React, { Component } from 'react';
import cxs from 'cxs';

const mainClassName = cxs({
  display: 'flex'
});

const subCenterClassName = cxs({
  flex: 5
});

const subSideClassName = cxs({
  flex: 1,
  backgroundColor: '#f5f7f8'
});

const headingClassName = cxs({
  color: '#000',
  backgroundColor: '#fff',
  margin: '0 0 1rem 0',
  textAlign: 'left',
  padding: '1rem 1.5rem',
  fontWeight: 500
});

const listClassName = cxs({
  padding: 0,
  backgroundColor: '#fff'
});

const listItemClassName = cxs({
  listStyleType: 'none',
  border: '1px solid #000',
  padding: '1rem 2rem',
  color: '#000',
  fontWeight: 400,
  display: 'flex',
  justifyContent: 'space-between'
});

const firstListItemClassName = cxs({
  listStyleType: 'none',
  border: '1px solid #000',
  padding: '1rem 2rem',
  color: '#FFF',
  backgroundColor: '#063d4b',
  fontSize: '1.5rem',
  paddingLeft: '0.5rem'
});

const linkClassName = cxs({
  fontSize: '1.5rem',
  textDecoration: 'none'
});

const primaryButtonClassName = cxs({
  backgroundColor: '#00A690',
  border: '1px solid #1EA691',
  fontWeight: 400,
  textAlign: 'center',
  padding: '.75rem 2rem',
  color: 'white',
  fontSize: '1rem',
  cursor: 'pointer',
  ':hover': {
    opacity: '0.8'
  }
});

const emptyClassName = cxs({
  textAlign: 'center',
  fontWeight: 400
});

class QuestionsList extends Component {
  render () {
    const {
      questions
    } = this.props;

    return (
      <div>
        <h1 className={headingClassName}>Welcome</h1>
        <div className={mainClassName}>
          <div className={subSideClassName} />
          <div className={subCenterClassName}>
            {questions.length <= 0
              ? <h2 className={emptyClassName}>Relax and enjoy having no questions!</h2>
              : <ul className={listClassName}>
                <li className={firstListItemClassName}>Questions</li>
                {questions.map((question) => (
                  <a href={`#/question/${question.id}`} className={linkClassName} key={question.id}>
                    <li key={question.id} className={listItemClassName}>
                      <span>{question.question}</span>
                      <a href={`#/question/${question.id}`} className={primaryButtonClassName}>Answer</a>
                    </li>
                  </a>
                ))}
              </ul>}
          </div>
          <div className={subSideClassName} />
        </div>
      </div>
    );
  };
};

export default QuestionsList;
