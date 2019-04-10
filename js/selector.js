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
		if (this.card1 != null) {
			this.card1 = card;
		}
		else if (this.card2 != null) {
			this.card2 = card;
		}
		else if (this.card3 != null) {
			this.card3 = card;
		}
	}

	resetSelectedCards() {
		this.card1 = null;
		this.card2 = null;
		this.card3 = null;
	}

	checkSet(fullDeck, playingField) {
		if (Card.isSet(this.card1, this.card2, this.card3)) {
			
			playingField.removeSet(this.card1, this.card2, this.card3);
			playingField.updatePlayingField(playingField, fullDeck);
		}
		else {
			return this.resetSelectedCards();
		}
	}

}