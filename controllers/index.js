const router = require('express').Router();

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

module.exports = router;