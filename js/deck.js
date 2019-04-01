// deck.js

import Card from "./card.js";

let colorsArr = Object.values(Card.colors)
let shapesArr = Object.values(Card.shapes)
let patternArr = Object.values(Card.pattern)
let numberArr = Object.values(Card.number)

export default class Deck {
	constructor() {
		this.cardList = [];
	}

	addToDeck(card) {
		this.cardList.push(card);
	}

	take(num) {

	}

	removeCard(card) {
		this.splice(this[card], 1);
	}

	removeSET(card1, card2, card3) {

	}

	size() {
		return this.cardList.length;
	}

	getRandCard() {
		rand_num = Math.random()*this.size();
		rand_card = this[rand_num];
		return rand_card;
	}

}

Deck.makeFullDeck = function () {
	let fullDeck = new Deck();
	for (let c of colorsArr) {
		for (let s of shapesArr) {
			for (let p of patternArr) {
				for (let n of numberArr) {
					let card = new Card(c, s, p, n);
					fullDeck.addToDeck(card);
				}
			}
		}
	}
	return fullDeck;	
}

Deck.makePlayingField = function (fullDeck) {
	let playingfield = new Deck();
	for (x = 0; x < 12; x++) {
		rand_card = fullDeck.getRandCard();
		playingfield.addToDeck(rand_card);
		fullDeck.removeCard(rand_card);
	}
	return playingfield;
}