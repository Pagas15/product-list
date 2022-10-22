import { reducer } from "./reducer";
import { createStore } from "react-hooks-global-state";

const initialState = {
  favorites: [43],
  listProducts: []
}

const { dispatch, useStoreState } = createStore(reducer, initialState);

export { dispatch, useStoreState };
