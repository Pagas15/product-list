import { reducer } from "./reducer";
import { createStore } from "react-hooks-global-state";
import { IInitialState } from "../models";


const initialState: IInitialState = {
  favorites: [43],
  listProducts: []
}

const { dispatch, useStoreState } = createStore(reducer, initialState);

export { dispatch, useStoreState };
