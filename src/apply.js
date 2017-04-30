// apply.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateForm } from './actions.js'

import './styles.scss'

const fields = [
	{name: 'fname', placeholder: 'First Name'},
	{name: 'lname', placeholder: 'Last Name'},
	{name: 'email', placeholder: 'Email Address'},
	{name: 'phone', placeholder: 'Phone Number'},
	{name: 'zip', placeholder: 'Zip Code'},
];

class Apply extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<form id="_apply">
				<h5>We need some information before moving on...</h5>
				{ fields.map(f => <Field key={f.name} field={f} {...this.props} />) }	
				<div className="submit">Submit</div>
			</form>
		);
	}
}

class Field extends Component{
	constructor(props){
		super(props);
		this._update = this._update.bind(this);
		this._validate = this._validate.bind(this);
	}

	_update(e){
		let { dispatch } = this.props,
			name = e.target.getAttribute('name');

		dispatch( updateForm({[name]: e.target.value}) );
	}

	_validate(e){
		console.log('here');
	}

	render(){
		let { shopper, field } = this.props;

		return (
			<input
				id={field.name}
				type={field.type}
				name={field.name}
				value={shopper[field.name] || ''}
				placeholder={field.placeholder}
				onChange={this._update}
				onFocus={this._validate} />
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Apply);