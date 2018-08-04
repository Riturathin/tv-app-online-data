import React from 'react';

class Recommended extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='col-xs-12 col-md-2'>
				<a href={ this.props.data.show.url } className='show-container'>
					{ this.props.data.show.image !== null ? <img className='img-border img-thumbnail'
								src={ this.props.data.show.image.medium } />:<img className='img-border img-thumbnail'
								src='//static.tvmaze.com/uploads/images/medium_portrait/160/400188.jpg' /> 
							}
					{/*<p className='col-xs-12 show-title text-left'>
						{ this.props.data.show.name }
					</p>*/}
					<hr />
				</a>
			</div>
		);
	}
}


export default Recommended;