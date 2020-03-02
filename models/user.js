const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    email: {
        type: String,
        required: true
    },
    madeDecks: [],
    favDecks: []
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

// const cardSchema = new mongoose.Schema({
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Owner'
//     },
//     decks: [],
//     front: String,
//     back: String
// }, { timestamps: true })
