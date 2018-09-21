const router = require('express').Router();
const addPage = require('../views/addPage')

router.get('/', async (req, res, next) => {
    try {
        //retrieve all wiki pages
        res.send('test text');
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        //submit new page to db
    } catch(err) {
        next(err);
    }
});

router.get('/add', async (req, res, next) => {
    try {
        res.send(addPage());
    } catch(err) {
        next(err);
    }
});


module.exports = router;