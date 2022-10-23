import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dispatch, useStoreState } from '../store/store';
import { apiBg } from '../utils/const';
import { requestGetProduct, stateFav } from '../utils/scripts';
import ButtonFavorite from './btns/ButtonFavorite'
import { IProduct, UserActionTypes } from '../models'
import ReactImageMagnify from '@blacklab/react-image-magnify';



const Product: React.FC = () => {
	const { id : productID } = useParams<{id?: string}>();
	const productIdNum: number = Number(productID)
	const [ product, setProduct ] = useState<IProduct | null>(null);
	const listFav = useStoreState('favorites');
	useEffect(() => {	
		requestGetProduct({id: productIdNum as number, callBack: (result: IProduct) => setProduct(result)})
	}, [productID])

	const onClickFavorite = () => {
		product && dispatch({type: UserActionTypes.TOGGLE_FAVORITE, id: product?.id})
	}
	
	return (<>
			{product ? <div className='product'>
				<div className="product__img">
				<ReactImageMagnify 
					imageProps={{
						alt: '',
						src: apiBg+product.src
					}} 
					magnifiedImageProps={{
						src: apiBg+product.src,
						width: 1200,
						height: 1800
					}}
					
				/>
				</div>
				<div className="product__info">
					<p className="product__title">{product.name}</p>
					<div className="product__priceFav">
						<div className="product__price">$ {product.price}</div>
						<ButtonFavorite state={stateFav(listFav, product.id)} size='large' onClick={onClickFavorite} />
					</div>
				</div>
			</div> : <p>Product louding...</p>}
		</>)
}

export default Product