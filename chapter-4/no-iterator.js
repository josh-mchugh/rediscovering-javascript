'use-strict';
//This code demonstrates the implementation of the [Symbol.iterate] on an instance of an object which is CardDeck.
class CardDeck {
    constructor() {
	this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    *[Symbol.iterator]() {
	yield this.suitShapes[0];
	yield this.suitShapes[1];
	yield this.suitShapes[2];
	yield this.suitShapes[3];
    }
}

const deck = new CardDeck();
for(const suit of deck) {
    console.log(suit);
}
