import React from 'react';
import { connect } from 'react-redux';

import {
  addTodo as addAction,
  addTodoSaga as addSagaAction
} from './state/modules/todos'

import logo from './logo.svg';
import './App.css';

function App({ todos, addTodo, addTodoSaga }) {
  console.log(todos, addTodo, addTodoSaga);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addAction(todo)),
  addTodoSaga: todo => dispatch(addSagaAction(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
