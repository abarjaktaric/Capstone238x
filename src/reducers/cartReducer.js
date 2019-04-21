import { ADD_ITEM, REMOVE_ITEM, ADD_QTY } from "../actions/actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const item = action.payload.item
      const quantity = action.payload.quantity
      let product = [
        { item },
        { quantity }
      ]
      return [...state, product]
    case REMOVE_ITEM:
      let itemIndex = action.payload.Index
      return [...state.slice(0, itemIndex),
      ...state.slice(itemIndex + 1)]
    case ADD_QTY:
      state[action.payload.Index][1].quantity = action.payload.quantity;
      return [...state]
    default:
      return state;
  }
}
