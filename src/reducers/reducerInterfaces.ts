export interface IItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IMainReducer {
  items: IItems[];
  cart: IItems[];
  loading: boolean;
  error: string | null;
  drawer: boolean;
}

export interface IState {
  mainReducer: IMainReducer;
}
