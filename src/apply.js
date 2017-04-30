// apply.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateForm } from './actions'
import { FIELDS } from './constants'

import './styles.scss'

class Apply extends Component{
	constructor(props){
		super(props);

		this.state = {
			attempted: false,
		};

		this._apply = this._apply.bind(this);
	}

	_apply(e){
		e.preventDefault();

		let { dispatch, shopper } = this.props;

		if( shopper.form_valid ) console.log('valid!');
		else this.setState({attempted: true});

		dispatch( updateForm({form_valid: all_valid}) );
	}

	render(){
		let { shopper } = this.props,
			{ attempted } = this.state,
			invalid = attempted && (!shopper.form_valid && _.isBoolean(shopper.form_valid));

		return(
			<form id="_apply" onSubmit={ this._apply } className="container">
				<h5>We need some information before moving on...</h5>

				{ FIELDS.map(f => <Field key={f.name} field={f} {...this.props} />) }	

				{ invalid && <div className="err-msg">One or more fields are incomplete or invalid.</div> }

				<button 
					disabled={ invalid }
					className="submit">Submit</button>
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

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Apply);