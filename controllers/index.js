const router = require('express').Router();
const Blog = require('../models/Blog');

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

module.exports = router;