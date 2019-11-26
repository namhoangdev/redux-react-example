import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './state/modules/todos'

import logo from './logo.svg';
import './App.css';

function App({todos, addTodo}) {
  console.log(todos);
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
  addTodo: todo => dispatch(addTodo(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
