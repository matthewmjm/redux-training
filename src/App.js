import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addTodo} from './actions/todos';
import {count} from './actions/count';

function App(props) {

  const showTodos = props.todos.map(todo => <h2>{todo.title}</h2>)
  return (
    <div className="App">
      <h1>Redux Store</h1>
      {showTodos}
      <button onClick={() => props.addTodo({title: "A Todo"})}>Create Todo</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => addTodo(todo, dispatch),
    increment: () => count(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);