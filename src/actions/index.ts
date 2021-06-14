import axios from "axios";
import { Dispatch } from "redux";
import { IItems } from "../reducers/reducerInterfaces";
import { Actions, IDrawerOpen, IAddToCart } from "./actionInterfacer";
import { actionTypes } from "./actionTypes";

export const fetchProducts =
  () => async (dispatch: Dispatch<Actions>, getState: any) => {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_REQUEST,
    });

    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_FAILURE,
        error,
      });
    }
  };

export const openDrawer = (isOpen: boolean): IDrawerOpen => ({
  type: actionTypes.DRAWER_OPEN,
  payload: isOpen,
});

export const addToCart = (id: number): IAddToCart => ({
  type: actionTypes.ADD_TO_CART,
  payload: id,
});
