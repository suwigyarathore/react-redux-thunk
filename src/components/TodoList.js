import React from "react";
import { connect } from "react-redux";

const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

const TodoList = function({ todos }) {
  return (
    <div className="Todo-List">
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ todos: state.todos });
export default connect(mapStateToProps)(TodoList);
