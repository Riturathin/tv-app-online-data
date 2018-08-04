import React from 'react';
import axios from 'axios';
import { APP_SECRET } from '../config.js'
import ShowList from './ShowList';


class Shows extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shows: []
		}
	}

	componentDidMount() {
		axios.get( `${ APP_SECRET.BASE_URL }shows` )
			.then( response => {
				this.setState({
					shows: response.data
				})
			})
			.catch( err => new Error(err))
	}

	render() {
		const { shows } =this.state 

		return (
			<div className='container'>
				<h1 className='text-left'>
					Shows
				</h1>
				<hr />
				<div className='row'>
					{ this.state.shows.map( ( item, index ) => {
						return <div className='col-xs-12 col-md-4 col-lg-3' key={ index }>
								<ShowList showdetails={ item } />
							</div>
					})}
				</div>

			</div>
		);
	}
}


export default Shows