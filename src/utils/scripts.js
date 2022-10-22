import { apiList } from "./const";

export const request = async ({url, method = 'GET', data = null, callBack}) => {
	try {
		const header = {};
		let body;

		if(data){
			header['Content-Type'] = 'application/json';
			body = JSON.stringify(data)
		}
		const response = await fetch(url, {
			method,
			header,
			body
		})

		const result = await response.json();
		if(callBack){
			callBack(result)
		} else {
			return result
		}

	} catch (event) {
		console.warn('Error: ', event.message)
	}
}

export const requestGetList = async ({callBack}) => {
	request({
		url: `${apiList}`,
		callBack
	})
}
export const requestGetProduct = async ({id, callBack}) => {
	request({
		url: `${apiList}?id=${id}`,
		callBack
	})
}