// Front end script

// const { post } = require("../../controllers");

const homeBtn = document.querySelector('#homeBtn');
const dashBtn = document.querySelector('#dashBtn');
const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');

const form = document.querySelector('#signUpAccBtn');

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

const newPost = document.getElementById('newBlogPost');

newPost.addEventListener('click', async (event) => {
    event.preventDefault();

    var blogger = document.querySelector('#blogger').value
    let blogContent = document.querySelector('#blogContent').value
    console.log(blogger);
    console.log(blogContent)
    if (postResponse.ok) {
        document.location.replace('/newBlog')
    }
    else {
        alert('Failed to post')
    }

});

