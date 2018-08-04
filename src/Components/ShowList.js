import React from 'react';
import '../Stylesheets/ShowList.css';


class ShowList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='row'>
				<a href={ this.props.showdetails.url } className='show-container'>
					<img className='img-border img-thumbnail'
						src={ this.props.showdetails.image.medium } />
					<p className='col-xs-12 show-title text-left'>
						{ this.props.showdetails.name }
					</p>
					<hr />

					<div className='col-xs-12 show-title'>
						<div className='text-left'> Rating: { this.props.showdetails.rating.average }</div>
					</div>

				</a>
			</div>
		);
	}
}

export default ShowList
