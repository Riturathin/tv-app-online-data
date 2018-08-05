import React from 'react';
import '../Stylesheets/Footer.css';

const Footer = () => (
	<div className='container-fluid footer'>
		<div className='row'>
			<div className='col-xs-12 col-md-3'>
				<h3>TVonLINE</h3>
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