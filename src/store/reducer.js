import * as actions from './actionTypes';

const defaultState = {
  inputvalue: "",
  list: []
}

// reducer 可以接受 state, 但是绝不能修改 state
export default (state = defaultState, action) => {
  if (action.type === actions.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); // 对原来的数据进行一次深拷贝
    newState.inputvalue = action.value
    return newState;
  }
  if (action.type === actions.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputvalue);
    newState.inputvalue = "";
    return newState;
  }
  if (action.type === actions.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
