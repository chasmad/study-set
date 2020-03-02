const mongoose = require('mongoose');

module.exports = mongoose.model('Card', cardSchema);

const cardSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
    decks: [],
    front: String,
    back: String
}, { timestamps: true })