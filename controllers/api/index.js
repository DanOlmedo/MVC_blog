const router = require('express').Router();
const Blog = require('../models/Blog');

router.post('/newBlog', async (req, res) => {

    const newBlog = await Blog.create({
        author: req.body.author,
        content: req.body.content
    })
        .then((newBlog) => {
            res.json(newBlog)
        })
        .catch((err) => {
            res.json(err);
        });
});

