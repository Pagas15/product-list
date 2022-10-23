import React from 'react';

type sizeButtonFavore = 'small' | 'medium' | 'large';

export interface IButtonFavProps {
	state?: Boolean,
	onClick?: () => void,
	size?: sizeButtonFavore
}

const ButtonFavorite: React.FC<IButtonFavProps> = ({ state = false, onClick, size = 'small' }) => {
	const bgColor: string = state ? '#414141' : '#ffffff';
	let sizePx: number = 25;
	switch (size) {
		case 'small':
			sizePx = 25;
			break;
		case 'medium':
			sizePx = 32;
			break;
		case 'large':
			sizePx = 86;
			break;
		default:
			break;
	}
	return (
		<button className='btnFavorite' onClick={onClick} style={{ background: bgColor, width: `${sizePx}px`, height: `${sizePx}px` }}>
			<svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.625 0.875C3.63044 0.875 2.67661 1.27009 1.97335 1.97335C1.27009 2.67661 0.875 3.63044 0.875 4.625V23.375C0.875 24.3696 1.27009 25.3234 1.97335 26.0266C2.67661 26.7299 3.63044 27.125 4.625 27.125H23.375C24.3696 27.125 25.3234 26.7299 26.0266 26.0266C26.7299 25.3234 27.125 24.3696 27.125 23.375V4.625C27.125 3.63044 26.7299 2.67661 26.0266 1.97335C25.3234 1.27009 24.3696 0.875 23.375 0.875H4.625ZM14 9.81875C14 9.81875 15.3219 7.78438 17.0375 7.48438C21.2937 6.74375 23.0469 10.4656 22.3344 13.2313C21.0687 18.1719 14 22.4844 14 22.4844C14 22.4844 6.93125 18.1719 5.66563 13.2406C4.9625 10.475 6.71562 6.74375 10.9625 7.49375C12.6781 7.79375 14 9.81875 14 9.81875Z" fill="#FFCC26" />
			</svg>
		</button>
	)
}

export default ButtonFavorite