// actions.js

export const updateForm = updates => {
	return {
		type: 'SHOPPER:UPDATE',
		payload: updates
	}
}

export const saveShopper = () => {
	return {
		type: 'SHOPPER:SAVE',
		payload: {
			save_done: true,
		}
	}
}

export const logout = () => {
	return {
		type: 'SHOPPER:LOGOUT',
		payload: {
			save_done: false,
		}
	}
}