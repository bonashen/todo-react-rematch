import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./todoItem";
import AddTodo from "./addTodo";

const mapState = state => {
  const todosIds = Object.keys(state.todos);
  return {
    totalTodos: todosIds.length,
    completedTodos: todosIds.filter(id => state.todos[id].done).length,
    todosArray: todosIds.map(id => ({
      ...state.todos[id],
      id
    }))
  };
};

const mapDispatch = dispatch => ({
  toggleDone: id => dispatch.todos.toggleDone(id),
  remove: id => dispatch.todos.remove(id),
  asyncRemove: id => dispatch.todos.asyncRemove(id)
});

@connect(
  mapState,
  mapDispatch
)
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo on rematch</h1>
        {this.props.todosArray.map(t => <TodoItem key={t.id} todo={t} />)}
        <AddTodo />
        <span>total:{this.props.totalTodos}</span>
        <button>Uncompleted</button>
        <button>Completed</button>
        <button>All</button>
      </div>
    );
  }
}
