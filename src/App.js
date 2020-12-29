import React from 'react';
import './App.css';
import { connect } from 'react-redux';

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
    addTodo: (todo) => dispatch({type: "ADD_TODO", payload: todo}),
    increment: () => dispatch({type: "INCREMENT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);