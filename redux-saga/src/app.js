import React from 'react';
import { render } from 'react-dom'
import Main from './main';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

document.querySelector('body').style.margin = 0;
document.documentElement.lang = 'en';
const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);
