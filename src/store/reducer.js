import * as actionTypes from './actionTypes';

const defaultState = {
  inputvalue: "",
  list: []
}

// reducer 可以接受 state, 但是绝不能修改 state
export default (state = defaultState, action) => {
  if (!action) {
    return state;
  }

  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    newState.inputvalue = action.value
  }
  if (action.type === actionTypes.ADD_TODO_ITEM) {
    newState.list.push(newState.inputvalue);
    newState.inputvalue = "";
  }
  if (action.type === actionTypes.DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
  }

  return newState;
}
