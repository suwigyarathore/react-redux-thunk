import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchTodos,
  toggleTodo,
  removeTodo,
  getVisibleTodos
} from "../reducers/todo";

const TodoItem = ({ id, name, isComplete, toggleTodo, removeTodo }) => (
  <li>
    <span className="delete-item">
      <button onClick={() => removeTodo(id)}>X</button>
    </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    />
    {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, toggleTodo, removeTodo } = this.props;
    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchTodos, toggleTodo, removeTodo };
const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todo.todos, ownProps.filter)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
