const router = require('express').Router();
const cardsCtrl = require('../controllers/cards');

// GET requests

// POST requests

// PUT requests
router.put('/:id', cardsCtrl.update);

// DELETE requests
router.delete('/:id', cardsCtrl.delete);

module.exports = router;