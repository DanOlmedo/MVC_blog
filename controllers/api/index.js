const router = require('express').Router();
const Blog = require('../models/Blog');

router.post('/newBlog', async (req,res) => {
    try{
        const newBlog = await Blog.create(req.body); 
        res.json(newBlog)
    }
    catch(err) {
        res.status(500).json(err)
    }
})