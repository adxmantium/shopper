// reducer.js

import _ from 'lodash'
import { FIELDS } from './constants'

const _save = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
}

const _get = key => {
	var val = localStorage.getItem(key);
	return val && JSON.parse(val);
}

let init = {
	users: _get('users') || [],
};

export default function(state = init, action) {

    switch(action.type) {

    	case 'SHOPPER:UPDATE_FORM':
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
			newState.login_form_valid = !!(newState.email && newState.phone);

    		return newState;

    	case 'SHOPPER:SAVE':
    		var newState = {...state, ...action.payload},
    			newUser = {};

    		_.each(FIELDS, f => newUser[f.name] = newState[f.name] );

    		newUser.id = newState.users.length + 1;

    		newState.activeUser = newUser;

    		//save to localStorage
    		_save('users', [...newState.users, newUser]);
    		newState.users = _get('users');

    		return newState;

    	case 'SHOPPER:UPDATE_USER':
    		var newState = {...state},
    			updateUser = {};

    		_.each(FIELDS, f => updateUser[f.name] = newState[f.name] );

    		// take updated info and find current user in users list and update that users info
    		newState.users = newState.users.map(u => {
    			if( u.id === newState.activeUser.id ) return {...u, ...updateUser};
    			return u;
    		});

    		//save to localStorage
    		_save('users', [...newState.users]);

    		return newState;

    	case 'SHOPPER:LOGOUT':
    		var newState = {...state, ...action.payload};

    		_.each(FIELDS, f => {
    			newState[f.name] = '';
    			newState[f.name+'_valid'] = null;
    		});

    		newState.activeUser = {};

    		return newState;

    	case 'SHOPPER:LOGIN':
    		var newState = {...state},
    			email = state.email || '',
    			phone = state.phone || '';

    		var found = _.find(state.users.slice(), {email, phone});
    		console.log('foudn: ', found);

    		if( found ){
    			newState.activeUser = {...found};
    			newState.login_failed = false;
    			newState.login_success = true;
    			newState = {...newState, ...found};

    		}else newState.login_failed = !found; 

    		return newState;

        default:
            return state;
            
    }

};