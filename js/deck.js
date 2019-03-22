// deck.js

import Card from "card.js";

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

	removeCard() {

	}

	removeSET() {

	}

}

function makeFullDeck() {
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
	
}