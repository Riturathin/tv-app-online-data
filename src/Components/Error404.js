import React from 'react';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

export default class Error404 extends React.Component {

	render() {
		return (
			<div >
				<h1>OOPS! </h1>
				<h3>404, Page not found</h3>
				<button className='btn btn-primary' onClick={ history.goBack }>BACK</button>
			</div>
		);
	}
}
