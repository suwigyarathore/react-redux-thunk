import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrent, saveTodo } from "../reducers/todo";

class TodoForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };

  render() {
    const { currentTodo } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={currentTodo}
        />
      </form>
    );
  }
}

const mapDispatchToProps = { updateCurrent, saveTodo };
const mapStateToProps = state => ({ currentTodo: state.todo.currentTodo });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
