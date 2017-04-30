// confirmation.js

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Confirmation extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className="container confirmation">
				<div>Your application has been received. We will get back to you as soon as possible. In the meantime, you can view your current application and/or edit it.</div>
			</div>
		);
	}
}