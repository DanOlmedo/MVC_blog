// Front end script

// const { post } = require("../../controllers");

const homeBtn = document.querySelector('#homeBtn');
const dashBtn = document.querySelector('#dashBtn');
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');

const form = document.getElementById('signUpAccBtn');

form.addEventListener('click', async (event) => {
    event.preventDefault();

    var userName = document.querySelector('#Input1').value
    let passWord = document.querySelector('#Input2').value


    let response = await fetch('/signup', { 
        method: 'post',
        body: JSON.stringify({
            username: userName,
            password: passWord
        }),
        headers: {'Content-Type' : 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert('Failed to sign up')
    }
});

const loginForm = document.getElementById('loginAccBtn');

loginForm.addEventListener('click', async (event) => {
    event.preventDefault();

    var userName = document.querySelector('#Input1').value
    let passWord = document.querySelector('#Input2').value

    let response = await fetch('/login', { 
        method: 'post',
        body: JSON.stringify({
            username: userName,
            password: passWord
        }),
        headers: {'Content-Type' : 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/')
        
    }
    else {
        alert('Failed to log in')
    }
});

// homeBtn.addEventListener('click', () => {
//     console.log('Home button')
//     window.location.href = "http://localhost:3001/";

// });

// dashBtn.addEventListener('click', () => {
//     console.log('Dashboard button')
//     window.location.href = "http://localhost:3001/dashboard";
// });

// loginBtn.addEventListener('click', () => {
//     console.log('Login button')
//     window.location.href = "http://localhost:3001/login";
// });

// signupBtn.addEventListener('click', () => {
//     console.log('Sign up button')
//     window.location.href = "http://localhost:3001/signup";

// })