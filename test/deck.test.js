// deck.test.js

let expect = chai.expect;

import Card from "../js/card.js";
import Deck from "../js/deck.js";

describe('Deck testing', () => {
	let testDeck;
	let playingField;
	let testCard;
	let testCard1;
	let testCard2;
	let testCard3;
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
	it('full deck minus one', () => {
		testDeck = Deck.makeFullDeck();
		testCard = new Card("red", "oval", "empty", "one");
		testDeck.removeCard(testCard);
		expect(testDeck.size()).to.equal(80);
	})
	it('full deck minus set', () => {
		testDeck = Deck.makeFullDeck();
		testCard1 = new Card("red", "oval", "empty", "one");
		testCard2 = new Card("red", "oval", "empty", "two");
		testCard3 = new Card("red", "oval", "empty", "three");
		testDeck.removeSet(testCard1, testCard2, testCard3);
		expect(testDeck.size()).to.equal(78);
	})


});