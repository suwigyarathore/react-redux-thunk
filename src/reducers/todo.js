import {
  getTodos,
  createTodos,
  updateTodo,
  destroyTodo
} from "../lib/todoServices";
import { showMessage } from "./message";

const initState = {
  todos: [],
  currentTodo: ""
};
const CURRENT_UPDATE = "CURRENT_UPDATE";
export const TODO_ADD = "TODO_ADD";
export const TODOS_LOAD = "TODOS_LOAD";
export const TODO_REPLACE = "TODO_REPLACE";
export const TODO_DELETE = "TODO_DELETE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos });
export const addTodo = todo => ({ type: TODO_ADD, payload: todo });
export const replaceTodo = todo => ({ type: TODO_REPLACE, payload: todo });
export const deleteTodo = id => ({ type: TODO_DELETE, payload: id });

export const fetchTodos = () => {
  return dispatch => {
    dispatch(showMessage("Loading Todos"));
    getTodos().then(todos => dispatch(loadTodos(todos)));
  };
};

export const saveTodo = name => {
  return dispatch => {
    dispatch(showMessage("Saving Todo"));
    createTodos(name).then(todo => dispatch(addTodo(todo)));
  };
};

export const toggleTodo = id => {
  return (dispatch, getState) => {
    dispatch(showMessage("Saving todo update"));
    const { todos } = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete };
    updateTodo(toggled).then(todo => dispatch(replaceTodo(todo)));
  };
};

export const removeTodo = id => {
  return dispatch => {
    dispatch(showMessage("Deleting todo"));
    destroyTodo(id).then(() => dispatch(deleteTodo(id)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        currentTodo: "",
        todos: state.todos.concat(action.payload)
      };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload.id ? action.payload : t
        )
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    default:
      return state;
  }
};
