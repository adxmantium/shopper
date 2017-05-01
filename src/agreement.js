// agreement.js

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

import { AGREEMENT } from './constants'
import { saveShopper } from './actions'

class Agreement extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this._saveShopper = this._saveShopper.bind(this);
	}

	_saveShopper(){
		let { dispatch } = this.props;

		dispatch( saveShopper() );
		hashHistory.push('/confirmation');
	}

	render(){
		return(
			<div className="container agreement">
				<div className="carrot sm" />

				<h4>Terms of Agreement</h4>
				
				{ AGREEMENT.map(a => <div key={a.id}>{a.label}</div>) }

				<div className="agree" onClick={ this._saveShopper }>I Agree</div>
				<Link to="/" className="disagree">I Disagree</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Agreement);