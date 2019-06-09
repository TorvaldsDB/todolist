import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: "",
  list: []
}

// reducer 可以接受 state, 但是绝不能修改 state
// reducer 必须是纯函数: 给定固定的输入, 就一定会有固定的输出, 而且不会有任何的副作用
// 1. 不要有可变的因素在函数中
// 2. 不要对参数(state action)作更改. 一旦做了修改, 我们就说造成了副作用.
export default (state = defaultState, action) => {
  if (!action) {
    return state;
  }

  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
  }
  if (action.type === actionTypes.ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
  }
  if (action.type === actionTypes.DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
  }

  return newState;
}
