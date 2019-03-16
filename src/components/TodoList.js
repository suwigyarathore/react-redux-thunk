import React from "react";

const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

export default function TodoList({ todos }) {
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
