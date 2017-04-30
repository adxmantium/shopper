// /shopper/src/index.js

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//store
import store from './store.js'
import LandingPage from './landing.js'

render((

	<Provider store={ store }>
		<Router history={ hashHistory }>
			<Route path="/" component={ LandingPage } />
	    </Router>
    </Provider>

), document.getElementById('_Shopper'));