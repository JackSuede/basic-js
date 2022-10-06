const userPassword = '12345'

const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', click => {
    const userNameField = document.getElementById('name');
    const passwordField = document.getElementById('password');
    const userName = userNameField.value;
    const password = passwordField.value;

    if (userName === 'Steven' && password === userPassword) {
        console.log('Welcome ' + userName + '!');
    } else {
        console.log('INTRUDER!!!');
    }

});