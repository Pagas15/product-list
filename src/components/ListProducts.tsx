import React from 'react'
import { Link } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid } from 'react-window';
import { IProduct } from '../models';
import { dispatch, useStoreState } from '../store/store'
import { apiBg } from '../utils/const';
import { urlProduct } from '../utils/routes';
import ButtonFavorite from './btns/ButtonFavorite';

interface IRowProps {
	columnIndex: number,
	rowIndex: number,
	style?: object,
	data: {
		listProducts: IProduct[],
		listFavorites: number[]
	}
}

const Row = ({columnIndex, rowIndex, style, data}: IRowProps) => {
	const indexCount = rowIndex * 4 + (columnIndex + 1)
	const onClick = (id: number) => {
		dispatch({type: 'toggleFavorite', id})
	}
	const item = data.listProducts[indexCount];
	const onClickBtn = () => {onClick(item.id)}
	const customStyle = {
		padding: '35px 15px'
	}
	return (
		<li className='productItem' style={{...style, ...customStyle}} key={item.id}>
			<div className='productItem__wrap'>
				<Link to={urlProduct+item.id} className="productItem__img"><img src={apiBg+item.src} alt="" /></Link>
				<p className="productItem__name">{item.name}</p>
				<p className="productItem__price">$ {item.price}</p>
				<ButtonFavorite state={!!data.listFavorites.find(key => key === item.id)} onClick={onClickBtn} size='medium' />
			</div>
		</li>
	)
}

const ListProducts: React.FC = () => {
	const listProducts = useStoreState('listProducts');
	const listFavorites = useStoreState('favorites');
	return (
		<div className='listProducts'>
			<AutoSizer>
				{({ height, width }: { height: number, width: number}) => (<FixedSizeGrid
						className="listProducts__list"
						height={height}
						width={(width + 30)}
						columnWidth={(width + 30) / 4 - 5}
						columnCount={4}
						rowHeight={420}
						rowCount={listProducts.length / 4}
						itemData={{listProducts, listFavorites}}
					>
						{Row}
					</FixedSizeGrid>)}
			</AutoSizer>
		</div>
		
	)
}

export default ListProducts