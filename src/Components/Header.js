import React from 'react';
import Search from './Search';


class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='col-xs-12 col-md-6 offset-md-3'>
				<Search />
			</div>
		);
	}
}


export default Header;