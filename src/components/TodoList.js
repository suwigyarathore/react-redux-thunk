import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../reducers/todo";

const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos } = this.props;
    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchTodos };
const mapStateToProps = state => ({ todos: state.todo.todos });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
