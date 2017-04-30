// reducer.js

import _ from 'lodash'

let init = {};

export default function(state = init, action) {

    switch(action.type) {

    	case 'SHOPPER:UPDATE':
    		return {...state, ...action.payload};

        default:
            return state;
            
    }

};