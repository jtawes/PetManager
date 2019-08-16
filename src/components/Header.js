import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
	<header className="top">
		<div className="container">
			<img src="./images/PetLogo.png" className="logo"/>
			<div className="top-navigation">
				<ul>
					<li className="menu-item">Log In</li>
					<li className="menu-item">Sign Up</li>
				</ul>
			</div>
		</div>
	</header>
);

export default Header;