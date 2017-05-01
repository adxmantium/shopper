// analytics.js

import { connect } from 'react-redux'
import React, { Component } from 'react'

import { saveShopper } from './actions'

class Analytics extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className="container agreement">
				<div className="carrot sm" />
				Analytics
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		shopper: state.shopper,
	};
};

export default connect(mapStateToProps)(Analytics);