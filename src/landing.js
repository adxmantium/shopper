// landing.js

import React, { Component } from 'react'
import { Link } from 'react-router'

import './styles.scss'

export default class LandingPage extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		let { children } = this.props;

		return(
			<div id="_landing">

				{ children || 
					<div>
						<h1>Become an Instacart Shopper!</h1>
						<Link to="/apply" className="apply">Apply Now ></Link>
					</div>
				}

			</div>
		);
	}
}