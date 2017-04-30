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
		payload: {}
	}
}