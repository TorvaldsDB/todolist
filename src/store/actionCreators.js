// 统一管理, 提高代码的可维护性, 都写在一个文件里面, 自动化测试非常方便
import * as types from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = (value) => ({
  type: types.ADD_TODO_ITEM,
  value
})
export const getItemDeleteAction = (index) => ({
  type: types.DELETE_TODO_ITEM,
  index
})
export const initTodoList = (data) => ({
  type: types.INITIALIZE_LIST,
  data
})
export const getInitList = () => ({
  type: types.GET_INIT_LIST
})
