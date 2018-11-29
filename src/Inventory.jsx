import React, {Component} from 'react';
import './App.css'

class Inventory extends Component {
	render() {
		console.log('this.props',this.props)
		let container = {
			Id: '',
			Container_Price: '',
			Weight:'',
			Description: '',
			WontainerId:'',
			Active: ''
		};
		container = this.props.container !== null ? this.props.container : container;


		return (
			<div className="container-details">
				<h2>Container Information</h2>
				<div>Description: {container.Description}</div>
				<div>Container Id: {container.Container_Id}</div>
				<div>Weight: {container.Weight}</div>
				<div>Price: {container.Container_Price}</div>
				<div>Status: {container.Active ? 'Active': 'Inactive'}</div>
			</div>
		)
	}
}
export default Inventory;