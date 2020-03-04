const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Deck', deckSchema);