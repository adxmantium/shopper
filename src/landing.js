// landing.js

import React, { Component } from 'react'

import './styles.scss'

export default class LandingPage extends Component{
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		return(
			<div id="_landing">

				<h1>Become an Instacart Shopper!</h1>

				<div className="apply">
					Apply Now >
				</div>

			</div>
		);
	}
}