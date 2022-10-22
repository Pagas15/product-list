import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dispatch } from '../store/store';
import { apiBg } from '../utils/const';
import { requestGetProduct } from '../utils/scripts';
import ButtonFavorite from './btns/ButtonFavorite'

const Product = () => {
	const { id : productID } = useParams();
	const [ product, setProduct ] = useState({});
	useEffect(() => {	
		requestGetProduct({id: +productID, callBack: result => setProduct(result)})
	}, [productID])

	const onClickFavorite = () => {
		dispatch({type: 'toggleFavorite', id: product.id})
	}
	
	return (
		<div className='product'>
			<div className="product__img"><img src={apiBg+product.src} alt="" /></div>
			<div className="product__info">
				<p className="product__title">{product.name}</p>
				<div className="product__priceFav">
					<div className="product__price">$ {product.price}</div>
					<ButtonFavorite size='large' onClick={onClickFavorite} />
				</div>
			</div>
		</div>
	)
}

export default Product