const router = require('express').Router();
const cardsCtrl = require('../controllers/cards');

// GET requests
// router.get('/new', cardsCtrl.new);
// router.get('/:id', cardsCtrl.show);
// POST requests
// router.post('/', cardsCtrl.create);
// PUT requests
router.put('/:id', cardsCtrl.update);

module.exports = router;