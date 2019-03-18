// playset.js

export default class GetCard {
	constructor() {
		this.card_color = card_color;
		this.card_shape = card_shape;
		this.card_pattern = card_pattern;
		this.num_shapes = num_shapes;
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