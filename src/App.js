import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { updateCurrent } from "./reducers/todo";

class App extends Component {
  render() {
    const { todos, currentTodo, updateCurrent } = this.props;
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
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { updateCurrent };
const mapStateToProps = state => state;

export default App;
