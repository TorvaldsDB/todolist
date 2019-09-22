import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const changeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const handleClick = () => ({
  type: ADD_ITEM
});
export const handleDelete = index => ({
  type: DELETE_ITEM,
  index
});
