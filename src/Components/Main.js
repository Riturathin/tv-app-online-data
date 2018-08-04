import React from 'react';
import Shows from './Shows';
import ShowDetails from './ShowDetails';
import { Route } from 'react-router-dom';

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route path='/' exact component={ Shows } />
				<Route path='/show/:topicId' exact component={ ShowDetails } />
			</div>
		);
	}
}

export default Main;