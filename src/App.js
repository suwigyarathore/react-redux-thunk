import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    const { todos, currentTodo, changeCurrent } = this.props;
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
          <TodoForm currentTodo={currentTodo} changeCurrent={changeCurrent} />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
