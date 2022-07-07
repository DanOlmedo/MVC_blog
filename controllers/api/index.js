const router = require('express').Router();
const Blog = require('../models/Blog');

router.post('/newBlog', async (req, res) => {

    await Blog.create(req.body)
        .then((blog) => {
            res.json(blog)
        })
        .catch((err) => {
            res.json(err);
        });
});

