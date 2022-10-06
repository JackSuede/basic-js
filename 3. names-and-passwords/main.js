const users = ['steven', 'tanya', 'maria', 'moin', 'join'];
const passwords = ['cake', 'cod', 'ball', 'junkfood', 'tuna'];

const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', click => {
    const userNameField = document.getElementById('name');
    const passwordField = document.getElementById('password');
    const userName = userNameField.value.toLowerCase();
    const password = passwordField.value;

    if (users.includes(userName) && passwords.includes(password)) {
        console.log('Welcome ' + userName + '!');
    } else {
        console.log('INTRUDER!!!');
    }

    let isAuthorized = false;

    for (let ii = 0; ii < users.length; ii++) {
        const user = users[ii];
        const pwd = passwords[ii];
        console.log('');
        console.log('users[ii]', user);
        console.log('passwords[ii]', pwd);
        if (userName === user && password === pwd) {
            isAuthorized = true;
        }
        
    }

    console.log(isAuthorized);
});