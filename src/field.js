// apply.js

import React, { Component } from 'react'

import { updateForm } from './actions'

export default class Field extends Component{
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
				if( /^[0-9\- ]+$/.test(val) ) valid = true;
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
			<div>
				<input
					id={field.name}
					type={field.type}
					name={field.name}
					className={!shopper[field.name+'_valid'] ? 'err' : ''}
					value={shopper[field.name] || ''}
					placeholder={field.placeholder}
					onChange={this._update}
					onFocus={this._update} />

				{ (!shopper[field.name+'_valid'] && 
				   _.isBoolean(shopper[field.name+'_valid'])) && 
						<div className="field-err">{field.err}</div> }
			</div>
		);
	}
}