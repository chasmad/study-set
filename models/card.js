const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
    deck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck'
    },
    front: String,
    back: String
}, { timestamps: true })

module.exports = mongoose.model('Card', cardSchema);