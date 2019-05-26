const defaultState = {
  inputvalue: "",
  list: []
}

// reducer 可以接受 state, 但是绝不能修改 state
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state)); // 对原来的数据进行一次深拷贝
    newState.inputvalue = action.value
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputvalue);
    newState.inputvalue = "";
    return newState;
  }
  return state;
}
