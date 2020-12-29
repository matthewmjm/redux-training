import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({todos, count});
const store = createStore(reducer);

function todos(state=[], action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload]
    default:
      return state
  }
}

function count(state=0, action) {
  switch(action.type) {
    case "ADD_TODO":
      return state + 1
    case "INCREMENT":
      return state + 1
    default:
      return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);