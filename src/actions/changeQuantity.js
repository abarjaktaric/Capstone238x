import { ADD_QTY} from "./actionTypes";
//* rubric55 - on change quantity update cost *//
//* rubric44 - change input quantity *//
export const changeQuantity = (Index, quantity) => dispatch => {
  dispatch({
    type: ADD_QTY,
    payload: {
      Index,
      quantity
    }
  });
}