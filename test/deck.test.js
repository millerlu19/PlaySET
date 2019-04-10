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
	let testCard4;
	let testCard5;
	let testCard6;
	let testCard7;
	let testCard8;
	let testCard9;
	let testCard10;
	let testCard11;
	let testCard12;

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
	it('update playing field', () => {
		playingField = new Deck();
		testDeck = Deck.makeFullDeck();

		testCard1 = new Card("red", "oval", "empty", "one");
		testCard2 = new Card("red", "oval", "empty", "two");
		testCard3 = new Card("red", "oval", "empty", "three");
		testCard4 = new Card("red", "diamond", "empty", "one");
		testCard5 = new Card("red", "diamond", "empty", "two");
		testCard6 = new Card("red", "diamond", "empty", "three");
		testCard7 = new Card("green", "squiggle", "empty", "one");
		testCard8 = new Card("green", "squiggle", "empty", "two");
		testCard9 = new Card("green", "squiggle", "empty", "three");
		testCard10 = new Card("green", "oval", "empty", "one");
		testCard11 = new Card("green", "oval", "empty", "two");
		testCard12 = new Card("green", "oval", "empty", "three");

		playingField.addToDeck(testCard1);
		playingField.addToDeck(testCard2);
		playingField.addToDeck(testCard3);
		playingField.addToDeck(testCard4);
		playingField.addToDeck(testCard5);
		playingField.addToDeck(testCard6);
		playingField.addToDeck(testCard7);
		playingField.addToDeck(testCard8);
		playingField.addToDeck(testCard9);
		playingField.addToDeck(testCard10);
		playingField.addToDeck(testCard11);
		playingField.addToDeck(testCard12);

		testDeck.removeCard(testCard1);
		testDeck.removeCard(testCard2);
		testDeck.removeCard(testCard3);
		testDeck.removeCard(testCard4);
		testDeck.removeCard(testCard5);
		testDeck.removeCard(testCard6);
		testDeck.removeCard(testCard7);
		testDeck.removeCard(testCard8);
		testDeck.removeCard(testCard9);
		testDeck.removeCard(testCard10);
		testDeck.removeCard(testCard11);
		testDeck.removeCard(testCard12);

		playingField.removeSet(testCard1, testCard2, testCard3);
		playingField = Deck.updatePlayingField(playingField, testDeck);

		expect(playingField.size()).to.equal(12);
		expect(testDeck.size()).to.equal(66);

	})


});