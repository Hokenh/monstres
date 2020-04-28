var cardObject = {
    deck: "",
    key: "",
    syllable: "",
    value: 1,
    variant: ""
}

const deckTypes = [
    "n", // nose
    "b", // bodyshape
    "e", // eye/s
    "m", // mouth
    "c", // complement
];

var decks = {
    "nose": {
        background: "",
        cards: {}
    },
    "body": {},
    "eyes": {},
    "mouth": {},
    "complement": {}
};

function newDeck() {
    return Object.create(decks);
};


export {
    newDeck
};