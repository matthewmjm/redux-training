import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({todos});
const store = createStore(reducer);

function todos(state=[], action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload]
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