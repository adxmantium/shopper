// confirmation.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import Logout from './logout'

import { logout } from './actions'

class Confirmation extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this._logout = this._logout.bind(this);
	}

	_logout(){
		let { dispatch } = this.props;
		dispatch( logout() );
		hashHistory.push('/');
	}

	render(){
		return(
			<div className="container confirmation">

				<h3>Your Application has been successfully submitted!</h3>
				<div>Your application has been received and is currently being reviewed. We will get back to you as soon as possible. In the meantime, you can view your current application and/or edit it.</div>

				<Link to="/apply" className="agree">View to Application</Link>
				<Logout />

			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Confirmation);