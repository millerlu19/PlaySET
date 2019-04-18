//PlaySet.js

import Card from "./card.js";
import Deck from "./deck.js";
import Selector from "./selector.js";

export default class PlaySet {


}

var draw = SVG('drawing').size(500, 500);
var rect = draw.rect(100, 150).fill('#000000').move(10,10);
var text = draw.plain('red').fill('#FFFFFF').move(10,10);
var text = draw.plain('oval').fill('#FFFFFF').move(10,20);
var text = draw.plain('empty').fill('#FFFFFF').move(10,30);
var text = draw.plain('one').fill('#FFFFFF').move(10,40);
var rect2 = draw.rect(100, 150).fill('#000000').move(120, 10);
var text = draw.plain('red').fill('#FFFFFF').move(120,10);
var text = draw.plain('oval').fill('#FFFFFF').move(120,20);
var text = draw.plain('empty').fill('#FFFFFF').move(120,30);
var text = draw.plain('two').fill('#FFFFFF').move(120,40);
var rect3 = draw.rect(100, 150).fill('#000000').move(230, 10);
var text = draw.plain('red').fill('#FFFFFF').move(230,10);
var text = draw.plain('oval').fill('#FFFFFF').move(230,20);
var text = draw.plain('empty').fill('#FFFFFF').move(230,30);
var text = draw.plain('three').fill('#FFFFFF').move(230,40);
var i = 0;
var click = function() {
	if (i%2 == 0){
		this.fill({color:'#32CD32'});
		i++;
	}
	else{
		this.fill({color: '#000000'});
		i++;
	}
	
}

rect.on('click', click);
rect2.on('click', click);
rect3.on('click', click);
