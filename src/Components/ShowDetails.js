import React from 'react';
import { getLocationOffset } from '../Utils/Helper.js'
import { APP_SECRET } from '../config.js';
import axios from 'axios';
import Show from './Show';

class ShowDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showdetails: {}
		}
	}

	fetchShowData() {
		const queryString  = getLocationOffset( this.props.location.pathname )
		axios.get( `${ APP_SECRET.BASE_URL }shows/${queryString}`)
			.then( response => {
				this.setState({
					showdetails: response.data 
				});
			})
			.catch( (err) => new Error(err) )

			console.log(`${ APP_SECRET.BASE_URL }shows/${queryString}`)
	}

	componentDidMount() {
		this.fetchShowData()
	}

	componentWillUpdate(nextProps) {
   	this.fetchShowData()
	}

	render() {
		const locationPath = getLocationOffset( this.props.location.pathname )
		return (
			<div className='container'>
				<h1 className='text-left'>Show Details</h1>
				<div className=''>
					<div className='col-xs-12'>
						{ Object.keys(this.state.showdetails).length === 0 ? null : 
							<Show details={ this.state.showdetails }  />
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ShowDetails;