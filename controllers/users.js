const User = require('../models/user');

module.exports = {
    index
};

// GET methods -----------
function index(req, res, next) {
    res.render('users/index');
};