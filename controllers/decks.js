const Deck = require('../models/deck');
const Card = require('../models/card');

module.exports = {
    index,
    new: newDeck,
    create,
    show,
    newCard,
    update,
    delete: deleteDeck
};

// GET methods -----------

function show(req, res) {
    Deck.findById(req.params.id)
        .populate('cards')
        .exec((err, deck) => {
            res.render('decks/show',
                {
                    deck,
                    cards: deck.cards,
                    user: req.user,
                });
        })
};

function index(req, res) {
    Deck.find({ owner: req.user._id }, (err, decks) => {
        console.log('At Index');
        res.render('decks/index', {
            user: req.user,
            decks
        });
    })
};

function newDeck(req, res) {
    res.render('decks/new', { user: req.user }
    );
}

// POST methods ----------

function newCard(req, res) {
    req.body.deck = req.params.id;
    req.body.owner = req.user._id;
    const card = new Card(req.body);
    card.save(err => {
        if (err) return res.redirect(`/decks/${req.params.id}`);
        Deck.findById(req.params.id, (err, deck) => {
            deck.cards.push(card);
            deck.save(err => {
                res.redirect(`/decks/${req.params.id}`)
            })
        })
    })
}

function create(req, res) {
    req.body.owner = req.user._id;
    const deck = new Deck(req.body);
    deck.save(err => {
        if (err) return res.redirect('/decks/new');
        res.redirect(`/decks/${deck._id}`);
    })
};

// PUT methods ----------

function update(req, res) {
    console.log("Updating Deck!");
    Deck.findByIdAndUpdate(req.params.id, req.body, (err, deck) => {
        console.log(deck);
        if (err) return res.redirect(`/decks/${deck._id}`);
        res.redirect(`/decks/${req.params.id}`)
    });
}

// DELETE methods ----------
function deleteDeck(req, res) {
    Deck.findByIdAndDelete(req.params.id, (err, result) => {
        console.log(result);
        if (err) return res.redirect('/decks');
        res.redirect('/decks');
    })
}