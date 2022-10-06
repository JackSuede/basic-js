const userPassword = '12345';
const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', click => {
    const accountField = document.getElementById('name');
    const passwordField = document.getElementById('password');
    const account = accountField.value;
    const password = passwordField.value;



    if (account === 'Steven' || account === 'stevensavoie@outlook.com' && password === userPassword) {
    // if (password === userPassword && account === 'Steven' || account === 'stevensavoie@outlook.com' ) {
    // if ((account === 'Steven' || account === 'stevensavoie@outlook.com') && password === userPassword) {

        console.log('Welcome ' + account + '!');
    } else {
        console.log('INTRUDER!!!');
    }

    
});