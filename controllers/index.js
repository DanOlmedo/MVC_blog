const router = require('express').Router();
const Blog = require('../models/Blog');
const User = require('../models/User');
// const express = require('express');
// var bodyParser = require('body-parser');

// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));
// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())

// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// var jsonParser = bodyParser.json()

const test1 = [
    {
        id:1,
        name1: 'name'
    }
]

router.get('/', async (req,res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true}));
    res.render('all', { blogs })
})

router.get('/login', async (req,res) => {
    res.render('login')
})

router.get('/signup', async (req,res) => {
    res.render('signup')

})

router.get('/dashboard', async (req,res) => {
    res.render('dashboard')

})

 router.get('/all', async (req,res) => {
     const blogData = await Blog.findAll().catch((err) => {
         res.json(err);
     });
     const blogs = blogData.map((blog) => blog.get({ plain: true}));
     res.render('all', { blogs })
 })

router.post('/signup', async (req,res) => {
    
    try {
        const newUser = await User.create(req.body)
          req.session.save(() => {
          req.session.user_id = newUser.id; 
          req.session.username = newUser.username;
          req.session.login = true;
          res.json(newUser);    
        //   console.log(req.session)
    })
    }
    catch (err) {
        res.status(500).json(err)
    }
    // res.send(req.body);
})

router.post('/login', async (req,res) => {
    try {
        let currentUser = await User.findOne({ 
            where: {
                username: req.body.username
            }
        })

        if (!currentUser){
            res.status(400).json({message: 'User not found'})
        }
        
        const correctPassword = currentUser.passwordChecker(req.body.password)

        if (!correctPassword){
            res.status(400).json({message: 'Password not found'})
        }

        req.sessions.save(() => {
            req.session.user_id = currentUser.id; 
            req.session.username = currentUser.username;
            req.session.login = true;
            res.json({currentUser, message : 'Logged in'});   
        })

    }
    catch (err) {
        res.status(500).json(err)  
    }
})

module.exports = router;