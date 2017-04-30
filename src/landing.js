// landing.js

import React, { Component } from 'react'

import './styles.scss'

export default class LandingPage extends Component{
	constructor(props){
		super(props);

		this.state = {
		  swipeClose: false
		}
	}

	render(){
		return(
			<div id="_landing">
				<h1>Landing Page</h1>
			</div>
		);
	}
}