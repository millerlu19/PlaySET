//PlaySet.js

import Card from "./card.js";
import Deck from "./deck.js";
import Selector from "./selector.js";

export default class PlaySet {

console.log("running");
var draw = SVG('drawing').size(300, 300);
var rect = draw.rect(100, 150).fill('#000000').move(10,10);
var click = function() {
	this.fill({color:'#32CD32'});
	console.log("click");
}

rect.on('click', click);
}

