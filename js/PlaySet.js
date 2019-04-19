//PlaySet.js

import Card from "./card.js";
import Deck from "./deck.js";
import Selector from "./selector.js";

export default class PlaySet {


}
let fullDeck = Deck.makeFullDeck();

let pField = Deck.makePlayingField(fullDeck);

console.log(fullDeck);
console.log(pField);
var draw = SVG('drawing').size(500, 1000);
var rect = draw.rect(100, 150).fill('#000000').move(10,10);
var text = draw.plain(pField.getCard(0).getColor()).fill('#FFFFFF').move(10,10);
var text = draw.plain(pField.getCard(0).getShape()).fill('#FFFFFF').move(10,20);
var text = draw.plain(pField.getCard(0).getPattern()).fill('#FFFFFF').move(10,30);
var text = draw.plain(pField.getCard(0).getNumber()).fill('#FFFFFF').move(10,40);
var rect2 = draw.rect(100, 150).fill('#000000').move(120, 10);
var text = draw.plain(pField.getCard(1).getColor()).fill('#FFFFFF').move(120,10);
var text = draw.plain(pField.getCard(1).getShape()).fill('#FFFFFF').move(120,20);
var text = draw.plain(pField.getCard(1).getPattern()).fill('#FFFFFF').move(120,30);
var text = draw.plain(pField.getCard(1).getNumber()).fill('#FFFFFF').move(120,40);
var rect3 = draw.rect(100, 150).fill('#000000').move(230, 10);
var text = draw.plain(pField.getCard(2).getColor()).fill('#FFFFFF').move(230,10);
var text = draw.plain(pField.getCard(2).getShape()).fill('#FFFFFF').move(230,20);
var text = draw.plain(pField.getCard(2).getPattern()).fill('#FFFFFF').move(230,30);
var text = draw.plain(pField.getCard(2).getNumber()).fill('#FFFFFF').move(230,40);
var rect4 = draw.rect(100, 150).fill('#000000').move(10,170);
var text = draw.plain(pField.getCard(3).getColor()).fill('#FFFFFF').move(10,170);
var text = draw.plain(pField.getCard(3).getShape()).fill('#FFFFFF').move(10,180);
var text = draw.plain(pField.getCard(3).getPattern()).fill('#FFFFFF').move(10,190);
var text = draw.plain(pField.getCard(3).getNumber()).fill('#FFFFFF').move(10,200);
var rect5 = draw.rect(100, 150).fill('#000000').move(120, 170);
var text = draw.plain(pField.getCard(4).getColor()).fill('#FFFFFF').move(120,170);
var text = draw.plain(pField.getCard(4).getShape()).fill('#FFFFFF').move(120,180);
var text = draw.plain(pField.getCard(4).getPattern()).fill('#FFFFFF').move(120,190);
var text = draw.plain(pField.getCard(4).getNumber()).fill('#FFFFFF').move(120,200);
var rect6 = draw.rect(100, 150).fill('#000000').move(230, 170);
var text = draw.plain(pField.getCard(5).getColor()).fill('#FFFFFF').move(230,170);
var text = draw.plain(pField.getCard(5).getShape()).fill('#FFFFFF').move(230,180);
var text = draw.plain(pField.getCard(5).getPattern()).fill('#FFFFFF').move(230,190);
var text = draw.plain(pField.getCard(5).getNumber()).fill('#FFFFFF').move(230,200);
var rect7 = draw.rect(100, 150).fill('#000000').move(10,330);
var text = draw.plain(pField.getCard(6).getColor()).fill('#FFFFFF').move(10,330);
var text = draw.plain(pField.getCard(6).getShape()).fill('#FFFFFF').move(10,340);
var text = draw.plain(pField.getCard(6).getPattern()).fill('#FFFFFF').move(10,350);
var text = draw.plain(pField.getCard(6).getNumber()).fill('#FFFFFF').move(10,360);
var rect8 = draw.rect(100, 150).fill('#000000').move(120, 330);
var text = draw.plain(pField.getCard(7).getColor()).fill('#FFFFFF').move(120,330);
var text = draw.plain(pField.getCard(7).getShape()).fill('#FFFFFF').move(120,340);
var text = draw.plain(pField.getCard(7).getPattern()).fill('#FFFFFF').move(120,350);
var text = draw.plain(pField.getCard(7).getNumber()).fill('#FFFFFF').move(120,360);
var rect9 = draw.rect(100, 150).fill('#000000').move(230, 330);
var text = draw.plain(pField.getCard(8).getColor()).fill('#FFFFFF').move(230,330);
var text = draw.plain(pField.getCard(8).getShape()).fill('#FFFFFF').move(230,340);
var text = draw.plain(pField.getCard(8).getPattern()).fill('#FFFFFF').move(230,350);
var text = draw.plain(pField.getCard(8).getNumber()).fill('#FFFFFF').move(230,360);
var rect10 = draw.rect(100, 150).fill('#000000').move(10,490);
var text = draw.plain(pField.getCard(9).getColor()).fill('#FFFFFF').move(10,490);
var text = draw.plain(pField.getCard(9).getShape()).fill('#FFFFFF').move(10,500);
var text = draw.plain(pField.getCard(9).getPattern()).fill('#FFFFFF').move(10,510);
var text = draw.plain(pField.getCard(9).getNumber()).fill('#FFFFFF').move(10,520);
var rect11 = draw.rect(100, 150).fill('#000000').move(120, 490);
var text = draw.plain(pField.getCard(10).getColor()).fill('#FFFFFF').move(120,490);
var text = draw.plain(pField.getCard(10).getShape()).fill('#FFFFFF').move(120,500);
var text = draw.plain(pField.getCard(10).getPattern()).fill('#FFFFFF').move(120,510);
var text = draw.plain(pField.getCard(10).getNumber()).fill('#FFFFFF').move(120,520);
var rect12 = draw.rect(100, 150).fill('#000000').move(230, 490);
var text = draw.plain(pField.getCard(11).getColor()).fill('#FFFFFF').move(230,490);
var text = draw.plain(pField.getCard(11).getShape()).fill('#FFFFFF').move(230,500);
var text = draw.plain(pField.getCard(11).getPattern()).fill('#FFFFFF').move(230,510);
var text = draw.plain(pField.getCard(11).getNumber()).fill('#FFFFFF').move(230,520);
var i = 0;
var click = function() {
	if (i < 3){
		this.fill({color:'#32CD32'});
		i++;
	}
	
	// if (i%2 == 0){
	// 	this.fill({color:'#32CD32'});
	// 	i++;
	// }
	// else{
	// 	this.fill({color: '#000000'});
	// 	i++;
	// }
	
}

rect.on('click', click);
rect2.on('click', click);
rect3.on('click', click);
rect4.on('click', click);
rect5.on('click', click);
rect6.on('click', click);
rect7.on('click', click);
rect8.on('click', click);
rect9.on('click', click);
rect10.on('click', click);
rect11.on('click', click);
rect12.on('click', click);

