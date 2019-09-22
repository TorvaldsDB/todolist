import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.props.inputValue} />
          <button>添加</button>
        </div>
        <ul>
          <li>Ok</li>
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

export default connect(
  mapStateToProps,
  null
)(TodoList);
