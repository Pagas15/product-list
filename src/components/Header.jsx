import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { urlMain } from '../utils/routes'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<Routes>
					<Route path="/" element={<p className="header__titlePage">Product list Page</p>} />
					<Route path="/product/:id" element={<>
						<Link to={urlMain} className='header__titlePage' style={{marginRight: 'auto'}}>Main page</Link>
						<p className="header__titlePage">Product Page</p>
					</>} />
				</Routes>
			</div>
		</header>
	)
}

export default Header