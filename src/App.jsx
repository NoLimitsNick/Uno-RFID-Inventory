import React, {Component} from 'react';
import './App.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Inventory from './Inventory'
const request = require('request');

class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			query: '',
			container:  null
		}
	}

	/*Logging state first before use is cool */
	search() {
		console.log('this.state', this.state);        
		const BASE_URL = 'http://localhost:3000/containers'
		const FETCH_URL = `${BASE_URL}/${this.state.query}`    	
		request({
			url: FETCH_URL,
			json: true
		}, (error, response, body) => {
			if (error){
				console.log('Unable to retreive data from Container API');
			}
			else if(response.statusCode=== 400) {
				console.log('Unable to the provided Container');
			}
			else if(response.statusCode === 200)
			{
				const container=body[0];
				console.log('container',container);
				this.setState({container})
			}
		});
	}

	render() {
		return (
		<div className="App">
			<div className='App-title'>Uno RFID Inventory</div>
			<FormGroup>
				<InputGroup>
					<FormControl
						type="text"
						placeholder="Search for a container"
						value={this.state.query}
						onChange={event => {this.setState({query: event.target.value})}}
						onKeyPress={event => {
							if (event.key === 'Enter'){
								this.search();
							}
						}}
					/>
					<InputGroup.Addon onClick={() => this.search()}>
						<Glyphicon glyph="search"></Glyphicon>
					</InputGroup.Addon>
				</InputGroup>
			</FormGroup>
			<div className="Container">
				<Inventory
				container ={this.state.container}
			/>
			</div>


		</div>
		)}
}
export default App;