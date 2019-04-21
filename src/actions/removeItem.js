import { REMOVE_ITEM } from "./actionTypes";

export const removeItem = (item, Index) => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: {
      item, 
      Index
    }
  });
}