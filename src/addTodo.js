import React, { Component } from "react";
import { connect } from "react-redux";

const mapDispatch = dispatch => ({
  addTodo: text => {
    //console.log(text);
    dispatch.todos.add(text);
  }
});

@connect(
  null,
  mapDispatch
)
export default class AddTodo extends Component {
  state = {
    value: ""
  };
  setValue = event => {
    this.setState({ value: event.target.value });
  };

  onKeyup = e => {
    // console.log(e);
    if (e.keyCode === 13) {
      this.addTodo();
    }
  };

  addTodo = () => {
    const { value } = this.state;
    if (value && value !== "") {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div>
        <span>
          <input
            type="text"
            value={this.state.value}
            onChange={this.setValue}
            onKeyUp={this.onKeyup}
          />
          <button onClick={() => this.addTodo()}>add</button>
        </span>
      </div>
    );
  }
}
