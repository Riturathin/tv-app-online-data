import React from 'react';
import Search from './Search';
import '../Stylesheets/Header.css';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='header'>
				<div className='row'>
					<div className='hidden-xs col-md-2'>
						<button className='btn btn-primary' onClick={ history.goBack }>Back</button>
					</div>

					<div className='col-xs-12 col-md-8'>
						<Search />
					</div>

					<div className='hidden-xs col-md-2'>
						<button className='btn btn-primary' onClick={ history.goForward }>Forward</button>
					</div>
				</div>
			</div>
		);
	}
}


export default Header;