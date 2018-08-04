import React from 'react';
import { APP_SECRET } from '../config.js';
import axios from 'axios';
import Recommended from './Recommended';
import '../Stylesheets/Recommended.css';


class RecommendedList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			recommededLists: []
		}
	}

	fetchShowData() {
		const queryString  = this.props.genre

		axios.get( `${ APP_SECRET.BASE_URL }search/shows/`,  {
				params:{
					q: queryString
				}
			})
			.then( response => {
				this.setState({
					recommededLists: response.data 
				});
			})
			.catch( (err) => new Error(err) )

			console.log(`${ APP_SECRET.BASE_URL }shows/${queryString}`)
	}

	componentDidMount() {
		this.fetchShowData()
	}

	render() {
		return (
			<div className='text-left recommended'>
				<h4>Recommended</h4>
				<hr />

				{ Object.keys(this.state.recommededLists) !== 0 && 
						<div className='row'>
							{ this.state.recommededLists.map( (item, index) => {
								if( index >= 4 ) { return  }
									else{
										return <Recommended key={ index } data={ item } />
									}
							})}
						</div>
				}

			</div>
		);
	}
}

export default RecommendedList;
