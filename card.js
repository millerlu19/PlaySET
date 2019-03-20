// card.js

export default class Card {
	constructor(card_color, card_shape, card_pattern, num_shapes) {
		this.card_color = card_color;
		this.card_shape = card_shape;
		this.card_pattern = card_pattern;
		this.num_shapes = num_shapes;
	}

	colors = {
		RED: "red",
		GREEN: "green",
		PURPLE: "purple"
	}

	shapes = {
		OVAL: "oval",
		DIAMOND: "diamond"
		SQUIGGLE: "squiggle"
	}

	pattern = {
		EMPTY: "empty",
		FULL: "full",
		STRIPES: "stripes"
	}

	number = {
		ONE: "one",
		TWO: "two",
		THREE: "three"
	}

	setCardColor(newColor) {
		card_color = newColor;
	}

	setCardShape(newShape) {
		card_shape = newShape;
	}

	setCardPattern(newPattern) {
		card_pattern = newPattern;
	}

	setNumShapes(newNumShapes) {
		num_shapes = newNumShapes;
	}

	getCardColor() {
		return card_color;
	}

	getCardShape() {
		return card_shape;
	}

	getCardPattern() {
		return card_pattern;
	}

	getCardNumShapes() {
		return num_shapes;
	}

}

function isValid(val1, val2, val3) {
	if (val1 == val2 && val1 == val3) {
		return true;
	}
	else if (val1 != val2 && val1 != val3 && val2 != val3) {
		return true;
	}
	else {
		return false;
	}
}