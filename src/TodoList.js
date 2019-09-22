import React, { Component, Fragment } from "react";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} />
          <button>添加</button>
        </div>
        <ul>
          <li>Ok</li>
        </ul>
      </Fragment>
      );
  }
}

export default TodoList;
