

type method = "POST" | "GET";

export interface IProduct {
	id: number,
	name: string,
	price: number,
	src: string
}

export interface IRequest {
	url: string,
	method?: method,
	data?: null | object,
	callBack?: (result: any) => void,
}

export interface IInitialState {
  favorites: number[],
  listProducts: IProduct[]
}

export interface IAction {
  type: string,
  id?: number,
  list?: IProduct[] | undefined
}

export interface IRowProps {
	columnIndex: number,
	rowIndex: number,
	style?: object,
	data: {
		listProducts: IProduct[],
		listFavorites: number[]
	}
}


export enum UserActionTypes {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  GET_PRODUCTS = 'GET_PRODUCTS'
}

interface AddFavorite {
  type: UserActionTypes.ADD_FAVORITE,
  id: number
}
interface RemuveFavorite {
  type: UserActionTypes.REMOVE_FAVORITE,
  id: number
}
interface ToggleFavorite {
  type: UserActionTypes.TOGGLE_FAVORITE,
  id: number
}
interface GetProducts {
  type: UserActionTypes.GET_PRODUCTS,
  list: IProduct[]
}

export type UserAction = AddFavorite | RemuveFavorite | ToggleFavorite | GetProducts
