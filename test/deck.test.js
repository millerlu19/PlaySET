// deck.test.js

let expect = chai.expect;

import Card from "../js/card.js";
import Deck from "../js/deck.js";

describe('Deck testing', () => {
	let testDeck;
	let playingField;
	let testCard;
	beforeEach (() => { testDeck = new Deck(); });

	it('full deck', () => {
		testDeck = Deck.makeFullDeck();
		expect(testDeck.size()).to.equal(81);
	});
	it('full deck then make playing field', () => {
		playingField = new Deck();
		testDeck = Deck.makeFullDeck();
		expect(testDeck.size()).to.equal(81);
		playingField = Deck.makePlayingField(testDeck);
		expect(testDeck.size()).to.equal(69);
		expect(playingField.size()).to.equal(12);
	})
	// it('full deck minus one', () => {
	// 	testDeck = Deck.makeFullDeck();
	// 	testCard = new Card("red", "oval", "empty", "one");
	// 	testDeck.removeCard(testCard);
	// 	expect(testDeck.size()).to.equal(80);
	// })


});