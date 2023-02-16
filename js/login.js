
document.getElementById('btn-submit').addEventListener('click', function () {
  // emailField  
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email)

    // getpss
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    console.log(pass);
    // verify 
    if (email === 'admin@vatiza.com' && pass === 'admin') {
        console.log('valid user');
    } else {
        console.log('invalid user')
    }

})
