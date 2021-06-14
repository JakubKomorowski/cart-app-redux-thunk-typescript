import { IItems } from "../reducers/reducerInterfaces";
import { actionTypes } from "./actionTypes";

interface IFetchRequest {
  type: typeof actionTypes.FETCH_PRODUCTS_REQUEST;
}

interface IFetch {
  type: typeof actionTypes.FETCH_PRODUCTS;
  payload: IItems[];
}

interface IFetchError {
  type: typeof actionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export interface IDrawerOpen {
  type: typeof actionTypes.DRAWER_OPEN;
  payload: boolean;
}

export interface IAddToCart {
  type: typeof actionTypes.ADD_TO_CART;
  payload: number;
}

export type Actions =
  | IFetch
  | IFetchError
  | IFetchRequest
  | IDrawerOpen
  | IAddToCart;
