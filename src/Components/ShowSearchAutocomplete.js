import React from 'react';
import { Link } from 'react-router-dom'

class ShowSearchAutocomplete extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<li onClick={ this.props.isAutocompleteDisplayed }>
					<Link to={`/show/${ this.props.details.show.id}`}>
						{ this.props.details.show.name }
					</Link>
				</li>
			
		);
	}
}

export default ShowSearchAutocomplete;