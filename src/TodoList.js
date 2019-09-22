import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  changeInputValue,
  handleClick,
  handleDelete
} from "./store/actionCreators";

const TodoList = ({
  inputValue,
  list,
  changeInputValue,
  handleClick,
  handleDelete
}) => {
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
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue: e => dispatch(changeInputValue(e.target.value)),
    handleClick: () => dispatch(handleClick()),
    handleDelete: index => dispatch(handleDelete(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
