const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const ageInput = document.querySelector('.age');
const submitButton = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-button');
const displayMessage = document.querySelector('.display-message');
const users = [];


submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	storeData(firstNameInput.value, lastNameInput.value, ageInput.value)
});

const storeData = (firstName, lastName, age) => {
	localStorage.setItem('firstname', firstName);
	localStorage.setItem('lastname', lastName);
	localStorage.setItem('userage', age);
};

clearButton.addEventListener('click', () => {
	localStorage.clear();
}) 

