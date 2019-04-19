// selected.js

// Keeps track of the cards that the user is selecting (clicking on) to determine if there is a set

import Card from "./card.js";
import Deck from "./deck.js";

export default class Selector {
	constructor() {
		this.card1 = null;
		this.card2 = null;
		this.card3 = null;
	}

	selectCard(card) {
		if (this.card1 == null) {
			this.card1 = card;
		}
		else if (this.card2 == null) {
			this.card2 = card;
		}
		else if (this.card3 == null) {
			this.card3 = card;
		}
	}

	getCard1(){
		return this.card1;
	}

	getCard2(){
		return this.card2;
	}
	getCard3(){
		return this.card3;
	}

	resetSelectedCards() {
		this.card1 = null;
		this.card2 = null;
		this.card3 = null;
	}

	checkSet() {
		if (Card.isSet(this.card1, this.card2, this.card3)) {
			return true;
			// playingField.removeSet(this.card1, this.card2, this.card3);
			// playingField.updatePlayingField(playingField, fullDeck);
		}
		else {
			this.resetSelectedCards();
			return false;
		}
	}

}