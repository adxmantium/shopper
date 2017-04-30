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
				<h3>Your Application has been successfully submitted!</h3>
				<div>Your application has been received and is currently being reviewed. We will get back to you as soon as possible. In the meantime, you can view your current application and/or edit it.</div>
				<Link to="/apply" className="agree">Go to Application</Link>
				<Link to="/" className="disagree">Log out</Link>
			</div>
		);
	}
}