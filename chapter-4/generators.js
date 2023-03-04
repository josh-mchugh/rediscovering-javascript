'use-strict';
//This code demonstrates using generators and yields to create a deck of cards. The generators and yeilds are able to work with the [Symbol.iterator] and used within a for...of loop. The generators can be combined like in the suitsAndPips function.
class CardDeck {

    constructor() {
	this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    
    *suits() {
	for(const color of this.suitShapes) {
	    yield color;
	}
    }
    
    *pips() {
	yield* ['Ace', 'King', 'Queen', 'Jack'];

	yield* Array.from(new Array(9), (ignore, index) => 10 - index);
    }
    
    *suitsAndPips() {
	yield* this.suits();
	yield* this.pips();
    }
}

const deck = new CardDeck();
for(const value of deck.suitsAndPips()) {
    process.stdout.write(value + ' ');
}
