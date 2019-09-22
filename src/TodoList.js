import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    const {
      inputValue,
      list,
      changeInputValue,
      handleClick,
      handleDelete
    } = this.props;

    return (
      <Fragment>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleClick}>添加</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} onClick={handleDelete.bind(this, index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },

    handleDelete(index) {
      const action = {
        type: "delete_item",
        index
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
