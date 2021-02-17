const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    //console.log(isValid);
    //Style the main message for an error
    if (isValid) {
        message.textContent = 'Please fill in all the fields.';
        message.style.color = 'orange';
        messageContainer.style.borderColor = 'orange';
        return;
    }
    //Check to see if the passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = '#1EFF00';
        password2El.style.borderColor = '#1EFF00';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = '#1EFF00';
        messageContainer.style.borderColor = '#1eFF00';
        password1El.style.borderColor = '#1EFF00';
        password2El.style.borderColor = '#1EFF00';
        return;
    }
    //If the form is valid and the passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = '#FFFF10';
        messageContainer.style.borderColor = '#FFFF10';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    //User data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //console.log(e);
    //Validate Form
    validateForm();
    //Submit the data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);