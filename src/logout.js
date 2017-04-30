// agreement.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import { logout } from './actions'
import { AGREEMENT } from './constants'

class Logout extends Component{
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
		return ( <div to="/" className="logout" onClick={ this._logout }>Log out</div> );
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Logout);