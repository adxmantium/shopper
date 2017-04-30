// agreement.js

import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import { AGREEMENT } from './constants'
import { saveShopper } from './actions'

export default class Agreement extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this._saveShopper = this._saveShopper.bind(this);
	}

	_saveShopper(){
		let { dispatch } = this.props;
		// dispatch( saveShopper() );
		hashHistory.push('/confirmation');
	}

	render(){
		return(
			<div className="container agreement">
				<h4>Terms of Service</h4>
				{ AGREEMENT.map(a => <div key={a.id}>{a.label}</div>) }
				<div className="agree" onClick={ this._saveShopper }>I Agree</div>
				<Link to="/" className="disagree">I Disagree</Link>
			</div>
		);
	}
}