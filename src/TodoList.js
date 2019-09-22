import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
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

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      console.log(e.target.value);
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
