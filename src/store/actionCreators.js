// 统一管理, 提高代码的可维护性, 都写在一个文件里面, 自动化测试非常方便
import * as actions from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actions.CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = (value) => ({
  type: actions.ADD_TODO_ITEM,
  value
})
export const getItemDeleteAction = (index) => ({
  type: actions.DELETE_TODO_ITEM,
  index
})
export const initTodoList = (data) => ({
  type: actions.INITIALIZE_LIST,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data;
      const action = initTodoList(data);
      dispatch(action);
    })
  }
}
