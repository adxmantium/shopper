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
					<div className="container landing">
						<div className="carrot" />
						<div className="promo">
							<div>Are you <span>independent</span>?</div>
							<div>Like having <span>fun</span>?</div>
							<div>Wanna earn some <span>extra income</span>?</div>
						</div>
						<h2>Become an <span>Instacart Shopper</span>!</h2>
						<Link to="/apply" className="apply">Apply Now</Link>
					</div>
				}

			</div>
		);
	}
}