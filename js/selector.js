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

	checkSet(){
		// if(Card.isSet(this.card1.getColor(), this.card2.getColor(), this.card3.getColor())){
		// 	return true;
		// }
		if(this.card1.getColor() == this.card2.getColor() && this.card2.getColor() == this.card3.getColor())
		{
			if(this.card1.getShape() == this.card2.getShape() && this.card2.getShape() == this.card3.getShape())
			{
				if(this.card1.getPattern() == this.card2.getPattern() && this.card2.getPattern() == this.card3.getPattern())
				{
					if(this.card1.getNumber() != this.card2.getNumber() && this.card1.getNumber() != this.card3.getNumber() && this.card2.getNumber() != this.card3.getNumber())
					{
						return true;
					}
					else
					{
						return false;
					}
				}
				else if(this.card1.getPattern() != this.card2.getPattern() && this.card1.getPattern() != this.card3.getPattern() && this.card2.getPattern() != this.card3.getPattern())
				{
					if(this.card1.getNumber() == this.card2.getNumber() && this.card2.getNumber() == this.card3.getNumber())
					{
						return true;
					}
					else
					{
						return false;
					}
				}
				else
				{
					return false;
				}
			}
			else if(this.card1.getShape() != this.card2.getShape() && this.card1.getShape() != this.card3.getShape() && this.card2.getShape() != this.card3.getShape())
			{
				if(this.card1.getPattern() == this.card2.getPattern() && this.card2.getPattern() == this.card3.getPattern())
				{
					if(this.card1.getNumber() == this.card2.getNumber() && this.card2.getNumber() == this.card3.getNumber())
					{
						return true;
					}
					else
					{
						return false
					}
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
		else if(this.card1.getColor() != this.card2.getColor() && this.card1.getColor() != this.card3.getColor() && this.card2.getColor() != this.card3.getColor())
		{
			if(this.card1.getShape() == this.card2.getShape() && this.card2.getShape() == this.card3.getShape())
			{
				if(this.card1.getPattern() == this.card2.getPattern() && this.card2.getPattern() == this.card3.getPattern())
				{
					if(this.card1.getNumber() == this.card2.getNumber() && this.card2.getNumber() == this.card3.getNumber())
					{
						return true;
					}
				}
			}
			if(this.card1.getShape() != this.card2.getShape() && this.card1.getShape() != this.card3.getShape() && this.card2.getShape() != this.card3.getShape())
			{
				if(this.card1.getPattern() != this.card2.getPattern() && this.card1.getPattern() != this.card3.getPattern() && this.card2.getPattern() != this.card3.getPattern())
				{
					if(this.card1.getNumber() != this.card2.getNumber() && this.card1.getNumber() != this.card3.getNumber() && this.card2.getNumber() != this.card3.getNumber())
					{
						return true;
					}
				}
			}
		}
		else
		{
			return false;
		}
	}


}

// Selector.checkSet= function(card1, card2, card3) {
// 	var color1 = card1.getColor();
// 	var color2 = card2.getColor();
// 	var color3 = card3.getColor();
// 	if (Card.isSet(color1, color2, color3)) {
// 		return true;
// 		// playingField.removeSet(this.card1, this.card2, this.card3);
// 		// playingField.updatePlayingField(playingField, fullDeck);
// 	}
// 	else {
// 		this.resetSelectedCards();
// 		return false;
// 	}
// }
