// deck.test.js

let expect = chai.expect;

import Card from "../js/card.js";
import Deck from "../js/deck.js";

describe('Deck testing', () => {
	let testDeck;
	beforeEach (() => { testDeck = new Deck(); });

	it('full deck', () => {
		testDeck = Deck.makeFullDeck();
		expect(testDeck.size()).to.equal(81);
	});


});