const Card = require('../models/card');
const Deck = require('../models/deck');

module.exports = {
    update
};

// // GET methods -----------
// function index(req, res) {
//     Deck.findById(req.params.id)
//     Card.find({ deck: req.params.id }, (err, cards) => {
//         console.log(cards);
//         console.log(req.user);
//         res.render('cards/index', {
//             user: req.user,
//             cards
//         });
//     })
// };

// POST methods ----------

// PUT methods ----------
function update(req, res) {
    Card.findByIdAndUpdate(req.params.id, req.body, (err, card) => {
        console.log('Updating Card!');
        if (err) return res.redirect(`/decks/${deck._id}`);
        res.redirect(`/decks/${card.deck._id}`)
    });
}