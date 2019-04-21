import { ADD_QTY} from "./actionTypes";

export const changeQuantity = (Index, quantity) => dispatch => {
  dispatch({
    type: ADD_QTY,
    payload: {
      Index,
      quantity
    }
  });
}