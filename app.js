const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const ageInput = document.querySelector('.age');
const submitButton = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-button');
const messageToDisplay = document.querySelector('.display-message');
const users = [];


submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	storeData(firstNameInput.value, lastNameInput.value, ageInput.value)
	displayMessage();
}); 

const storeData = (firstName, lastName, age) => {
	localStorage.setItem('firstname', firstName);
	localStorage.setItem('lastname', lastName);
	localStorage.setItem('userage', age);
};

clearButton.addEventListener('click', () => {
	localStorage.clear();
}) 

const messageText = document.querySelector('.message-text');

const displayMessage = () => {
    messageText.textContent = `Hello, ${firstNameInput.value} ${lastNameInput.value}. You are ${ageInput.value} years old! :)`;
	
    const avocadoImage = document.querySelector('.avocado-image');
    avocadoImage.style.display = 'flex';
}



