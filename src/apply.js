// apply.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateForm } from './actions.js'

import './styles.scss'

const fields = [
	{name: 'fname', placeholder: 'First Name', type: 'text'},
	{name: 'lname', placeholder: 'Last Name', type: 'text'},
	{name: 'email', placeholder: 'Email Address', type: 'email'},
	{name: 'phone', placeholder: 'Phone Number', type: 'tel'},
	{name: 'zip', placeholder: 'Zip Code', type: 'text'},
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
		let name = e.target.getAttribute('name'),
			val = e.target.value;

		this._validate(name, val);		
	}

	_validate(name, val){
		let { dispatch } = this.props,
			valid = false;

		switch(name){

			case 'fname':
			case 'lname':
				if( /^[A-Za-z -]+$/.test(val) ) valid = true;
				break;

			case 'email':
				if( /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val) ) valid = true;
				break;

			case 'phone':
				if( /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(val) ) valid = true;
				break;

			case 'zip':
				if( /^[a-zA-Z0-9\.,\- ]+$/.test(val) ) valid = true;
				break;

		}

		dispatch( updateForm({
			[name]: val,
			[name+'_valid']: valid,
		}) );
	}

	render(){
		let { shopper, field } = this.props;

		return (
			<input
				id={field.name}
				type={field.type}
				name={field.name}
				className={!shopper[field.name+'_valid'] ? 'err' : ''}
				value={shopper[field.name] || ''}
				placeholder={field.placeholder}
				onChange={this._update}
				onFocus={this._update} />
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Apply);