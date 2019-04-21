import { ADD_ITEM } from "./actionTypes";

export const addItem = (item, quantity) => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      item,
      quantity
    }
  });
}