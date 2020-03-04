const Card = require('../models/card');

module.exports = {
    update,
    delete: deleteCard
};

// GET methods -----------

// POST methods ----------

// PUT methods ----------
function update(req, res) {
    Card.findByIdAndUpdate(req.params.id, req.body, (err, card) => {
        console.log('Updating Card!');
        if (err) return res.redirect(`/decks/${deck._id}`);
        res.redirect(`/decks/${card.deck._id}`)
    });
}

// DELETE methods ----------
function deleteCard(req, res) {
    Card.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) return res.redirect(`/decks/${deck._id}`);
        res.redirect(`/decks/${result.deck._id}`)
    })
}