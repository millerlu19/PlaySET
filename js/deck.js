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

	removeCard(card) {
		this.cardList.splice(this.cardList.indexOf(card), 1);
	}

	removeSet(card1, card2, card3) {
		this.removeCard(card1);
		this.removeCard(card2);
		this.removeCard(card3);
	}

	size() {
		return this.cardList.length;
	}

	getRandCard() {
		let rand_num = Math.random()*this.size();
		let rand_card = this[rand_num];
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

Deck.makePlayingField = function (deck) {
	let playingField = new Deck();
	for (let x = 0; x < 12; x++) {
		let rand_card = deck.getRandCard();
		playingField.addToDeck(rand_card);
		deck.removeCard(rand_card);
	}
	return playingField;
}

Deck.updatePlayingField = function (playingField, deck) {
	for (let x = 0; x < 3; x++) {
		let rand_card = deck.getRandCard();
		playingField.addToDeck(rand_card);
		deck.removeCard(rand_card);
	}
	return playingField
}