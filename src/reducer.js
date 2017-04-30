// reducer.js

import _ from 'lodash'
import { FIELDS } from './constants'

let init = {
	users: _get('users') || [],
};

const _save = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
}

const _get = key => {
	var val = localStorage.getItem(key);
	return val && JSON.parse(val);
}

console.log('taking a break');

export default function(state = init, action) {

    switch(action.type) {

    	case 'SHOPPER:UPDATE':
    		var newState = {...state, ...action.payload},
    			all_valid = false;

    		_.each(FIELDS, f => {
				if( !newState[f.name+'_valid'] ){
					all_valid = false;
					return false;
				}

				all_valid = true;
			});

			newState.form_valid = all_valid;

    		return newState;

    	case 'SHOPPER:SAVE':
    		var newState = {...state, ...action.payload},
    			newUser = {};

    		_.each(FIELDS, f => newUser[f.name] = newState[f.name] );

    		newState.activeUser = newUser;

    		//save to localStorage
    		_save('users', [...newState.users, newUser]);

    		return newState;

    	case 'SHOPPER:LOGOUT':
    		var newState = {...state, ...action.payload};

    		_.each(FIELDS, f => newState[f.name] = '' );

    		newState.activeUser = {};

    		return newState;

        default:
            return state;
            
    }

};