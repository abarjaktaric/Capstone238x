import { REMOVE_ITEM } from "./actionTypes";
//* rubric54 - remove item  from cart*//
export const removeItem = (item, Index) => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: {
      item, 
      Index
    }
  });
}