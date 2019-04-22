import { ADD_ITEM } from "./actionTypes";
//* rubric30 - add item *//
export const addItem = (item, quantity) => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      item,
      quantity
    }
  });
}