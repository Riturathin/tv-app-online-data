import React from 'react';
import axios from 'axios';
import { APP_SECRET } from '../config.js';
import ShowSearchAutocomplete from './ShowSearchAutocomplete';
import '../Stylesheets/Search.css';


class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			isAutocompleteDisplayed: false,
			autocompleteShows: []
		}
	}

	handleSubmitQuery(e) {
		e.preventDefault()
		const { query , autocompleteShows } = this.state
	}

	handleQueryChange(e) {
		const queryString = e.target.value
		axios.get( `${ APP_SECRET.BASE_URL }/search/shows`,  {
			params: {
				q: queryString
			}
		})
		.then( response => {
			this.setState({
				isAutocompleteDisplayed: true,
				autocompleteShows: response.data
			})
		})
		.catch( (err) => new Error(err) )
	}

	handleAutocompleteClick () {
		debugger
		const { isAutocompleteDisplayed } = this.state
		this.setState({
			isAutocompleteDisplayed: false 
		});
	}


	render() {
		return (
			<div className='col-xs-12'>
				<form className='form-group' onSubmit={ this.handleSubmitQuery.bind( this ) }>
					<div className='row'>
						<div className='col-xs-9'>
							<input className='form-control' placeholder='Search...' onChange={ this.handleQueryChange.bind(this)} />
						</div>
						<div className='col-xs-3'>
							<button className='btn btn-primary'>GO</button>
						</div>
					</div>
				</form>

				{ this.state.isAutocompleteDisplayed ?  
					(<ul className='autocomplete-box' onClick={ this.handleAutocompleteClick.bind(this)}>
					 { 
						this.state.autocompleteShows && this.state.autocompleteShows.map( (item, index) =>{
							return <ShowSearchAutocomplete 
													onClick={ this.handleAutocompleteClick.bind(this)}
													details={item} 
													key={ index }
													/>
						})
					}
				</ul>):null}
				
			</div>
		);
	}
}


export default Search;