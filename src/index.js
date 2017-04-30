// /shopper/src/index.js

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//store
import store from './store.js'
import Apply from './apply.js'
import Login from './login.js'
import LandingPage from './landing.js'
import Agreement from './agreement.js'
import Confirmation from './confirmation.js'

render((

	<Provider store={ store }>
		<Router history={ hashHistory }>
			<Route path="/" component={ LandingPage }>
				<Route path="/apply" component={ Apply } />
				<Route path="/login" component={ Login } />
				<Route path="/agreement" component={ Agreement } />
				<Route path="/confirmation" component={ Confirmation } />
			</Route>
	    </Router>
    </Provider>

), document.getElementById('_Shopper'));