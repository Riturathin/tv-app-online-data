import React from 'react';
import Shows from './Shows';
import ShowDetails from './ShowDetails';
import Error404 from './Error404';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={ Shows } />
					<Route path='/show/:topicId' exact 
						render={props=>
							<ShowDetails key={props.match.params.topicId} {...props} />
						} />
					<Route component={ Error404 } />
				</Switch>
			</div>
		);
	}
}

export default Main;