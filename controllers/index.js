const router = require('express').Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

const test1 = [
    {
        id:1,
        name1: 'name'
    }
]

router.get('/',  (req,res) => {
    console.log(test1)
    res.render('main')
})

router.get('/all', async (req,res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true}));
    res.render('all', { blogs })
})

router.post('/singup', async (req,res) => {
    const newUser = new User.create(req.body).catch((err) => {
        res.json(err);
    })
    req.session.save(() => {
        req.session.user.id = newUser.id;
        req.session.user.username = newUser.username;
        req.sessions.login = true;
        res.json(newUser);
    })
})

module.exports = router;