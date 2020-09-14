import * as types from "../actions/constants";

export default function (state = {}, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case types.REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
