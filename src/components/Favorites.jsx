import React from 'react'
import { Link } from 'react-router-dom';
import { dispatch, useStoreState } from '../store/store'
import { apiBg } from '../utils/const';
import { urlProduct } from '../utils/routes';
import ButtonFavorite from './btns/ButtonFavorite'

const Favorites = () => {
	const listFavorite = useStoreState('favorites');
	const listProducts = useStoreState('listProducts');


	// console.log(listProducts);
	const removeFavorite = (id) => {
		dispatch({type: 'removeFavorite', id})
	}

	const listFavoriteItems = () => {
		return listFavorite.map(id => {
			const item = listProducts.find(item => item.id === id);
			const onClickBtn = () => {
				removeFavorite(id)
			}
			return item && <li className="favorite__item favoriteCard" key={id}>
				<Link to={urlProduct+item.id} className="favoriteCard__img"><img src={apiBg+item.src} alt="" /></Link>
				<div className="favoriteCard__info">
					<p className="favoriteCard__name">{item.name}</p>
					<div className='favoriteCard__priceFav'>
						<p className="favoriteCard__price">$ {item.price}</p>
						<ButtonFavorite state size='small' onClick={onClickBtn} />
					</div>
				</div>
			</li>
		})
	}
	return (
		<div className='favorite'>
			<p className="favorite__title">Favorites</p>
			{(listFavorite.length >= 1) ? <ul className="favorite__list">
				{listFavoriteItems()}
			</ul> : <p>List empty</p>}
		</div>
	)
}

export default Favorites