import React, { useState } from 'react';
import cxs from 'cxs';

const mainClassName = cxs({
  display: 'flex',
  backgroundColor: '#fff'
});

const subCenterClassName = cxs({
  flex: 5,
  backgroundColor: '#fff',
  height: '100vh',
  padding: '0 4rem'
});

const subSideClassName = cxs({
  flex: 1,
  backgroundColor: '#f5f7f8',
  height: '100vh'
});

const headingClassName = cxs({
  color: '#222'
});

const primaryButtonClassName = cxs({
  backgroundColor: '#00A690',
  border: '1px solid #1EA691',
  fontWeight: 400,
  textAlign: 'center',
  padding: '.75rem 2rem',
  color: 'white',
  fontSize: '1rem',
  margin: '1.5rem 1rem 1.5rem 0',
  cursor: 'pointer',
  ':hover': {
    opacity: '0.8'
  },
  ':disabled': {
    opacity: '0.3',
    cursor: 'not-allowed'
  }
});

const secondaryButtonClassName = cxs({
  backgroundColor: '#FFF',
  border: '1px solid #1EA691',
  fontWeight: 400,
  textAlign: 'center',
  padding: '.75rem 2rem',
  color: '#222',
  fontSize: '1rem',
  margin: '1.5rem 0',
  cursor: 'pointer',
  ':hover': {
    opacity: '0.8'
  }
});

const inputClassname = cxs({
  padding: '.375rem .75rem',
  fontSize: '1rem',
  margin: '1.5rem 0 0 0',
  width: '15rem',
  minWidth: '97.5%',
  height: '5rem'
});

const textClassName = cxs({
  fontSize: '1.25rem',
  margin: '1rem 0',
  fontWeight: 400
});

const wellClassName = cxs({
  margin: '1.5rem 0 0 0',
  backgroundColor: '#f9f9f9',
  border: '1px solid #e3e3e3',
  padding: '1rem',
  boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)'
});

const Question = ({ match: { params: { id } }, questions, sendAnswer, history }) => {
  const [answer, handleChange] = useState('');
  const cancelAnswer = () => history.push('');
  const question = questions.find((question) => question.id === id) || {id: '000', question: ''};

  return (
    <form className={mainClassName} onSubmit={() => sendAnswer(id)}>
      <div className={subSideClassName} />
      <div className={subCenterClassName}>
        <h2 className={headingClassName}>Answer the question below:</h2>
        <div className={wellClassName}><p className={textClassName}>{question.question}</p></div>
        <textarea className={inputClassname} onChange={(event) => handleChange(event.target.value)} value={answer} placeholder='Enter answer' />
        <br />
        <input type="submit" className={primaryButtonClassName} disabled={!answer} value="Click to send"/>
        <button className={secondaryButtonClassName} onClick={cancelAnswer}>Cancel</button>
      </div>
      <div className={subSideClassName} />
    </form>
  );
};

export default Question;
