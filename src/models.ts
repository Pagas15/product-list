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
