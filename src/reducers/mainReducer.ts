import { Actions } from "../actions/actionInterfacer";
import { actionTypes } from "../actions/actionTypes";
import { IMainReducer } from "./reducerInterfaces";

const initialState = {
  items: [],
  cart: [],
  loading: false,
  error: null,
  drawer: false,
};

const mainReducer = (state: IMainReducer = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.DRAWER_OPEN:
      return {
        ...state,
        drawer: action.payload,
      };

    case actionTypes.ADD_TO_CART:
      const addedItem = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, addedItem],
      };

    default:
      return state;
  }
};

export default mainReducer;
