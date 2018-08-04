import React from 'react';
import '../Stylesheets/ShowList.css';


class Show extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='col-xs-12'>	
				<hr />
				<h1>{ this.props.details.name }</h1>
				<a href={ this.props.details.url } className='show-container'>
					<div className='col-xs-12 col-md-6'>
						{ this.props.details.image !== null ? <img className='img-border img-thumbnail'
							src={ this.props.details.image.medium } />:<img className='img-border img-thumbnail'
							src='//static.tvmaze.com/uploads/images/medium_portrait/160/400188.jpg' /> }
						
						<div className='col-xs-12 show-title text-left'>
							<span><b>Genres :</b></span>
							{ this.props.details.genres.map( ( item, index ) => {
									return <span> { item } .</span>
								}) 
							}
						</div>
						<hr />

						<div className='col-xs-12 show-title'>
							<div className='text-left'> Rating: { this.props.details.rating.average }</div>
						</div>
					</div>

				</a>
			</div>
		);
	}
}

export default Show
