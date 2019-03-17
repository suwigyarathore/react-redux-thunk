import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, toggleTodo } from "../reducers/todo";

const TodoItem = ({ id, name, isComplete, toggleTodo }) => (
  <li>
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
    const { todos, toggleTodo } = this.props;
    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchTodos, toggleTodo };
const mapStateToProps = state => ({ todos: state.todo.todos });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
