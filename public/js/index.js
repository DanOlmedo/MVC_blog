// Front end script

const homeBtn = document.querySelector('#homeBtn');
const dashBtn = document.querySelector('#dashBtn');
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');

homeBtn.addEventListener('click', () => {
    console.log('Home button')
    window.location.href = "http://localhost:3001/";

});

dashBtn.addEventListener('click', () => {
    console.log('Dashboard button')
    // window.location.href = "http://localhost:3001/dasboard";
});

loginBtn.addEventListener('click', () => {
    console.log('Login button')
    window.location.href = "http://localhost:3001/login";
});

signupBtn.addEventListener('click', () => {
    console.log('Sign up button')
    window.location.href = "http://localhost:3001/signup";

})