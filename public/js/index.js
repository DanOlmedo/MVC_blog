// Front end script

// const form = document.querySelector('#signUpAccBtn');

// form.addEventListener('click', async (event) => {
//     event.preventDefault();

//     var userName = document.querySelector('#Input1').value
//     let passWord = document.querySelector('#Input2').value


//      let response = await fetch('/signup', { 
//          method: 'post',
//          body: JSON.stringify({
//              username: userName,
//              password: passWord
//          }),
//          headers: {'Content-Type' : 'application/json'}
//      })
//      if (response.ok) {
//          document.location.replace('/')
//      }
//      else {
//          alert('Failed to sign up')
//      }
//  });

// const loginForm = document.getElementById('#loginAccBtn');

// loginForm.addEventListener('click', async (event) => {
//     event.preventDefault();

//     var userName = document.querySelector('#Input1').value
//     let passWord = document.querySelector('#Input2').value

//     let response = await fetch('/login', { 
//         method: 'post',
//         body: JSON.stringify({
//             username: userName,
//             password: passWord
//         }),
//         headers: {'Content-Type' : 'application/json'}
//     })
//     if (response.ok) {
//         document.location.replace('/')
        
//     }
//     else {
//         alert('Failed to log in')
//     }
// });

const newPost = document.getElementById('newBlogPost');

newPost.addEventListener('click', async (event) => {
    event.preventDefault();

    var blogger = document.querySelector('#blogger').value
    let blogContent = document.querySelector('#blogContent').value

    console.log({blogger,blogContent})

    let response = await fetch('/newBlog', { 
        method: 'post',
        body: JSON.stringify({
            author: blogger,
            content: blogContent
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

