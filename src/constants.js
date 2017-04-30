// constants.js

export const FIELDS = [
	{name: 'fname', placeholder: 'First Name', type: 'text', err: 'Invalid first name. Ex: John'},
	{name: 'lname', placeholder: 'Last Name', type: 'text', err: 'Invalid first name. Ex: Doe'},
	{name: 'email', placeholder: 'Email Address', type: 'email', err: 'Invalid email. Ex: someone@example.com', login: true},
	{name: 'phone', placeholder: 'Phone Number', type: 'tel', err: 'Invalid phone number. Ex: 123-123-1234', login: true},
	{name: 'zip', placeholder: 'Zip Code', type: 'text', err: 'Invalid zip code. Ex: 12345'},
];

export const AGREEMENT = [
	{id: 1, label: 'I hereby authorize Instacart to investigate my background and qualifications for purposes of evaluating whether I am qualified for the position for which I am applying.'},
	{id: 2, label: 'I understand that Instacart will utilize an outside firm or firms to assist it in checking such information, and I specifically authorize such an investigation by information services and outside entities of the company\'s choice.'},
	{id: 3, label: 'I also understand that I may withhold my permission and that in such a case, no investigation will be done, and my application for employment will not be processed further.'},
];