import React from 'react';
import '../Stylesheets/ShowList.css';
import { timeFormatter } from '../Utils/Helper'
import RecommendedList from './RecommendedList';

class Show extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recommendedLists: []
		}
	}

	render() {
		return (
			<div className='col-xs-12'>	
				<hr />
				
				<a href={ this.props.details.url } className='show-container'>
					<div className='row'>
						<div className='col-xs-12 col-md-4'>
							{ this.props.details.image !== null ? <img className='img-border img-thumbnail'
								src={ this.props.details.image.medium } />:<img className='img-border img-thumbnail'
								src='//static.tvmaze.com/uploads/images/medium_portrait/160/400188.jpg' /> 
							}
						</div>

						<div className='col-xs-12 col-md-8 text-left'>
							<h3>{ this.props.details.name }</h3>
							<hr />
							<div><b><small>Type: </small></b>{ this.props.details.type }</div>
							<div><b><small>Language: </small></b>{ this.props.details.language }</div>
							<div><b><small>Genres: </small></b>{ this.props.details.genres.map( (item, index) => {
								 return <span> { item } </span>
								}) 
							}</div>
							<div><b><small>Status : </small></b> { this.props.details.status }</div>
							<div><b><small>Runtime : </small></b> { this.props.details.runtime } mins</div>
							<div>Schedule:
								<div><b><small>Time: </small></b>  { timeFormatter( this.props.details.schedule.time )}</div>
								<div><b><small>Days: </small></b> { this.props.details.schedule.days.map( (item, index) => {
								 return <span> { item } </span>
								}) 
							}</div>
							</div>

							<div><b><small>Network: </small></b> { this.props.details.network ? this.props.details.network.name:'Unknown'  } </div>
							<div><b><small>Country: </small></b> { this.props.details.country ? this.props.details.country.name:'Unknown'   }</div>
						</div>
					</div>
				</a>

				<RecommendedList genre={ this.props.details.genres[0] }/>
			</div>
		);
	}
}

export default Show
