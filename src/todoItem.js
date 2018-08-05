import React, { Component } from "react";
import { connect } from "react-redux";
const mapDispatch = dispatch => ({
  toggleDone: id => dispatch.todos.toggleDone(id),
  remove: id => dispatch.todos.remove(id),
  asyncRemove: id => dispatch.todos.asyncRemove(id)
});
@connect(
  null,
  mapDispatch
)
export default class TodoItem extends Component {
  render() {
    // console.log(this.props.todo);
    const t = this.props.todo;
    return (
      <div className="todo">
        <div className="todo-text">{t.text}</div>
        <div className="todo-op">
          <input
            type="button"
            value="remove"
            onClick={() => this.props.remove(t.id)}
          />
        </div>
      </div>
    );
  }
}
