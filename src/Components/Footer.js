import React from 'react';
import { Link } from 'react-router-dom';


import '../Stylesheets/Footer.css';

const Footer = () => (
	<div className='container-fluid footer'>
		<div className='row'>
			<div className='col-xs-12 col-md-3'>
				<Link to='/'>
					<h3 style={{ color: '#fff'}}>TVonLINE</h3>
				</Link>
			</div>

			<div className='col-xs-12 col-md-6'>
				&copy; { new Date().getFullYear() } all rights reserved
			</div>

			<div className='col-xs-12 col-md-3'>

			</div>
		</div>
	</div>
)

export default Footer;