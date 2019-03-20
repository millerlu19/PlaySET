// card.js

let colors = {
	RED: "red",
	GREEN: "green",
	PURPLE: "purple"
}

let shapes = {
	OVAL: "oval",
	DIAMOND: "diamond"
	SQUIGGLE: "squiggle"
}

let pattern = {
	EMPTY: "empty",
	FULL: "full",
	STRIPES: "stripes"
}

let number = {
	ONE: "one",
	TWO: "two",
	THREE: "three"
}

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