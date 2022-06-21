const router = require('express').Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

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
    const newUser = await User.create(req.body)
    // req.session.save(() => {
    //     //   newUser.id = req.session.user.id; 
    //     //   req.session.user.username = newUser.username;
    //     //   req.sessions.login = true;
    //     //   res.json(newUser);    
    //         res.json(newUser)
    //         console.log(req.session)
    // })
    console.log(req.body)
    res.send(`test`)
})

module.exports = router;