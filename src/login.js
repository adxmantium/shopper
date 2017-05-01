// login.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import Field from './field'
import { login } from './actions'
import { FIELDS } from './constants'

const LOGIN_FIELDS = _.filter(FIELDS, f => !!f.login);

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this._login = this._login.bind(this);
	}

	componentWillReceiveProps(np){
		console.log('taking break');

		let { shopper: s } = this.props,
			{ shopper: ns} = np;

		if( ns.login_success ) hashHistory.push('/apply');
	}

	_login(e){
		e.preventDefault();

		let { dispatch, shopper } = this.props;
		if( shopper.login_form_valid ) dispatch( login() );
	}

	render(){
		let { shopper } = this.props,
			login_filled = shopper.email && shopper.phone,
			invalidLogin = shopper.login_failed && _.isBoolean(shopper.login_failed);

		return (
			<form id="_apply" onSubmit={ this._login } className="container">
				<div className="carrot sm" />
				
				<h5>Login to view your existing application</h5>

				{ LOGIN_FIELDS.map(l => <Field key={l.name} field={l} {...this.props} />) }

				<button 
					disabled={ !login_filled }
					className="submit">Login</button>

				{ invalidLogin && 
					<div className="no-acct">No existing account with these credentials.</div>}

				<Link to="/apply" className="logout">Don't have an account?</Link>
			</form>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Login);