import './style.css'
const cardForm = document.getElementById('card-form');
const completedState = document.getElementById('completed-state');

const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const expiryMonthInput = document.getElementById('expiry-month');
const expiryYearInput = document.getElementById('expiry-year');
const cvcInput = document.getElementById('cvc');

const cardNameDisplay = document.getElementById('card-name-display');
const cardNumberDisplay = document.getElementById('card-number-display');
const cardExpiryDisplay = document.getElementById('card-expiry-display');
const cardCvcDisplay = document.getElementById('card-cvc-display');

const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const expiryError = document.getElementById('expiry-error');
const cvcError = document.getElementById('cvc-error');

function formatCardNumber(value) {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.replace(/(\d{4})(?=\d)/g, '$1 ');
}

function formatExpiry(month, year) {
    const formattedMonth = month.padStart(2, '0');
    const formattedYear = year.padStart(2, '0');
    return `${formattedMonth}/${formattedYear}`;
}

function updateCardDisplay() {
    const nameValue = nameInput.value.trim();
    cardNameDisplay.textContent = nameValue || 'Jane Appleseed';
    
    const numberValue = numberInput.value;
    cardNumberDisplay.textContent = numberValue || '0000 0000 0000 0000';
    
    const monthValue = expiryMonthInput.value;
    const yearValue = expiryYearInput.value;
    if (monthValue || yearValue) {
        cardExpiryDisplay.textContent = formatExpiry(monthValue, yearValue);
    } else {
        cardExpiryDisplay.textContent = '00/00';
    }
    
    const cvcValue = cvcInput.value;
    cardCvcDisplay.textContent = cvcValue || '000';
}

function showError(errorElement, message, inputElement) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    inputElement.classList.add('error');
}

function hideError(errorElement, inputElement) {
    errorElement.classList.add('hidden');
    errorElement.textContent = '';
    inputElement.classList.remove('error');
}

function validateName(value) {
    if (!value.trim()) {
        showError(nameError, "Can't be blank", nameInput);
        return false;
    }
    hideError(nameError, nameInput);
    return true;
}

function validateCardNumber(value) {
    const cleanValue = value.replace(/\s/g, '');
    if (!cleanValue) {
        showError(numberError, "Can't be blank", numberInput);
        return false;
    }
    if (!/^\d{16}$/.test(cleanValue)) {
        showError(numberError, "Wrong format, numbers only", numberInput);
        return false;
    }
    hideError(numberError, numberInput);
    return true;
}

function validateExpiry(month, year) {
    if (!month || !year) {
        showError(expiryError, "Can't be blank", expiryMonthInput);
        expiryYearInput.classList.add('error');
        return false;
    }
    
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    
    if (!/^\d{2}$/.test(month) || monthNum < 1 || monthNum > 12) {
        showError(expiryError, "Invalid month", expiryMonthInput);
        expiryYearInput.classList.add('error');
        return false;
    }
    
    if (!/^\d{2}$/.test(year)) {
        showError(expiryError, "Invalid year", expiryYearInput);
        expiryMonthInput.classList.add('error');
        return false;
    }
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; 
    const currentMonth = currentDate.getMonth() + 1;
    
    if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
        showError(expiryError, "Card expired", expiryMonthInput);
        expiryYearInput.classList.add('error');
        return false;
    }
    
    hideError(expiryError, expiryMonthInput);
    expiryYearInput.classList.remove('error');
    return true;
}

function validateCvc(value) {
    if (!value) {
        showError(cvcError, "Can't be blank", cvcInput);
        return false;
    }
    if (!/^\d{3}$/.test(value)) {
        showError(cvcError, "Invalid CVC", cvcInput);
        return false;
    }
    hideError(cvcError, cvcInput);
    return true;
}

nameInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    updateCardDisplay();
});

numberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) {
        value = value.substring(0, 16);
    }
    e.target.value = formatCardNumber(value);
    updateCardDisplay();
});

expiryMonthInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.substring(0, 2);
    }
    if (value.length === 2 && parseInt(value) > 12) {
        value = '12';
    }
    e.target.value = value;
    updateCardDisplay();
});

expiryYearInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.substring(0, 2);
    }
    e.target.value = value;
    updateCardDisplay();
});

cvcInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) {
        value = value.substring(0, 3);
    }
    e.target.value = value;
    updateCardDisplay();
});

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = validateName(nameInput.value);
    const isNumberValid = validateCardNumber(numberInput.value);
    const isExpiryValid = validateExpiry(expiryMonthInput.value, expiryYearInput.value);
    const isCvcValid = validateCvc(cvcInput.value);
    
    if (isNameValid && isNumberValid && isExpiryValid && isCvcValid) {
        cardForm.parentElement.classList.add('hidden');
        completedState.classList.remove('hidden');
        completedState.classList.add('flex');
    }
});

const continueButton = completedState.querySelector('button');
continueButton.addEventListener('click', () => {
    cardForm.reset();
    
    cardNameDisplay.textContent = 'Jane Appleseed';
    cardNumberDisplay.textContent = '0000 0000 0000 0000';
    cardExpiryDisplay.textContent = '00/00';
    cardCvcDisplay.textContent = '000';
    
    hideError(nameError, nameInput);
    hideError(numberError, numberInput);
    hideError(expiryError, expiryMonthInput);
    expiryYearInput.classList.remove('error');
    hideError(cvcError, cvcInput);
    
    completedState.classList.add('hidden');
    completedState.classList.remove('flex');
    cardForm.parentElement.classList.remove('hidden');
});

updateCardDisplay();