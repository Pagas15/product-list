import { IInitialState, UserAction, UserActionTypes } from "../models";


export const reducer = (state: IInitialState, action: UserAction): IInitialState => {
  switch (action.type) {
    case UserActionTypes.ADD_FAVORITE: return {...state, favorites: [...state.favorites, action.id]};
    case UserActionTypes.REMOVE_FAVORITE: return {...state, favorites: state.favorites.filter(item => item !== action.id)};
    case UserActionTypes.TOGGLE_FAVORITE: return ((state.favorites.find(id => action.id === id)) ? {...state, favorites: state.favorites.filter(item => item !== action.id)} : {...state, favorites: [...state.favorites, action.id]})
    case UserActionTypes.GET_PRODUCTS: return {...state, listProducts: action.list};
    default: return state;
  }
}