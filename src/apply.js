// apply.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import Field from './field'
import Logout from './logout'
import { FIELDS } from './constants'
import { updateForm, updateUser } from './actions'

class Apply extends Component{
	constructor(props){
		super(props);

		this.state = {
			updated: false,
			attempted: false,
		};

		this._apply = this._apply.bind(this);
	}

	_apply(e){
		e.preventDefault();

		let { dispatch, shopper } = this.props,
			activeUserSet = !!_.get(shopper, 'activeUser', false) && !_.isEmpty(shopper.activeUser);

		if( shopper.form_valid ){
			if( activeUserSet ){
				this.state.updated = true;
				dispatch( updateUser() );

			}else hashHistory.push('agreement');

		}else this.setState({attempted: true});
	}

	render(){
		let { shopper } = this.props,
			{ attempted, updated } = this.state,
			invalid = attempted && (!shopper.form_valid && _.isBoolean(shopper.form_valid)),
			activeUserSet = !!_.get(shopper, 'activeUser', false) && !_.isEmpty(shopper.activeUser);

		return(
			<form id="_apply" onSubmit={ this._apply } className="container">
				{ activeUserSet ? 
					<h5>Update your information</h5>
					: <h5>We need some information before moving on...</h5>
				}

				{ FIELDS.map(f => <Field key={f.name} field={f} {...this.props} />) }	

				{ invalid && <div className="err-msg">One or more fields are incomplete or invalid.</div> }

				<button 
					disabled={ invalid }
					className="submit">
						{ activeUserSet ? 'Update' : 'Submit' }
				</button>

				{ activeUserSet ? 
					<Logout />
					: <Link to="/login" className="logout">Already applied?</Link> }

				{ (activeUserSet && updated) && <div className="updated">Successfully updated!</div> }
			</form>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Apply);