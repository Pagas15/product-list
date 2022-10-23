import { IRequest } from "../models";
import { apiList } from "./const";


export const request = async ({url, method = 'GET', data = null, callBack}: IRequest) => {
	try {
		const headers: {'Content-Type'?: string} = {};
		let body: any;

		if(data){
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(data)
		}
		const response = await fetch(url, {
			method,
			headers,
			body
		})

		const result = await response.json();
		if(callBack){
			callBack(result)
		} else {
			return result
		}

	} catch (event: any) {
		console.warn('Error: ', event.message)
	}
}

export const requestGetList = async ({callBack} : {callBack: (result: any) => void}) => {
	request({
		url: `${apiList}`,
		callBack
	})
}
export const requestGetProduct = async ({id, callBack}: {id: number, callBack: (result: any) => void}) => {
	request({
		url: `${apiList}?id=${id}`,
		callBack
	})
}

export const stateFav = (list: number[], id: number) => !!list.find(key => key === id);