const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: {
        type: String,
        required: true
    },
    madeDecks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MadeDeck'
    }],
    favDecks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FavDeck'
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);