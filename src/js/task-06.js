const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    const requiredValueLength = parseInt(validationInput.getAttribute('data-length'));
    const inputValueLength = validationInput.value.trim().length;

    validationInput.classList.remove('valid', 'invalid');

    if (requiredValueLength === inputValueLength) {
        validationInput.classList.add('valid');
    }
    else {
        validationInput.classList.add('invalid');
    }
});