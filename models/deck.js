const mongoose = require('mongoose');

module.exports = mongoose.model('Deck', deckSchema);

const deckSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
}, { timestamps: true });