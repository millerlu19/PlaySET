// card.js

// created enum objects for each of the 4 attributes that determines one specific card
	// color, shape, pattern, number of shapes
let colors = {
	RED: "red",
	GREEN: "green",
	PURPLE: "purple"
}

let shapes = {
	OVAL: "oval",
	DIAMOND: "diamond",
	SQUIGGLE: "squiggle"
}

let pattern = {
	EMPTY: "empty",
	STRIPES: "stripes",
	FULL: "full"
}

let number = {
	ONE: "one",
	TWO: "two",
	THREE: "three"
}

// Card class: initialize instance variables
	// instance variables: color, shape, pattern, number
export default class Card {
	constructor(color, shape, pattern, number) {
		this.color = color;
		this.shape = shape;
		this.pattern = pattern;
		this.number = number;
	}

	setColor(newColor) {
		this.color = newColor;
	}

	setShape(newShape) {
		this.shape = newShape;
	}

	setPattern(newPattern) {
		this.pattern = newPattern;
	}

	setNumber(newNumber) {
		this.number = newNumber;
	}

	getColor() {
		return this.color;
	}

	getShape() {
		return this.shape;
	}

	getPattern() {
		return this.pattern;
	}

	getNumber() {
		return this.number;
	}

}

// create global variables for instance variables in Card class
	// this will allow variables to be used in other files
Card.colors = colors;
Card.shapes = shapes;
Card.pattern = pattern;
Card.number = number;

// isValid: checks 3 cards to determine if they are a valid "set"
	// valid set: for all 3 cards, each attribute is all the same or all different
function isSet(val1, val2, val3) {
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