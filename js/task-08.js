document.querySelector('.login-form').addEventListener('submit', event => {
    event.preventDefault();

    const email = event.currentTarget .elements.email.value;
    const password = event.currentTarget .elements.password.value;

    if (email === '' || password === '') {
        alert('This field is required.');
        return;
    }

    const formData = {
        email,
        password
    };

    console.log(formData);

    event.currentTarget.reset();
});