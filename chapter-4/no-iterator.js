'use-strict';
//This code demonstrates the implementation of the [Symbol.iterate] on an instance of an object which is CardDeck.
class CardDeck {
    constructor() {
	this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    [Symbol.iterator]() {
	let index = -1;
	const self = this;
	return {
	    next() {
		index++;
		return {
		    done: index >= self.suitShapes.length,
		    value: self.suitShapes[index]
		};
	    }
	};
    }
}

const deck = new CardDeck();
for(const suit of deck) {
    console.log(suit);
}
