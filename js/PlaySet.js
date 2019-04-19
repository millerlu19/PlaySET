//PlaySet.js

import Card from "./card.js";
import Deck from "./deck.js";
import Selector from "./selector.js";

export default class PlaySet {


}
let fullDeck = Deck.makeFullDeck();

let pField = Deck.makePlayingField(fullDeck);

let select = new Selector();

console.log(fullDeck);
console.log(pField);
var card1 = pField.getCard(0);
var card2 = pField.getCard(1);
var card3 = pField.getCard(2);
var card4 = pField.getCard(3);
var card5 = pField.getCard(4);
var card6 = pField.getCard(5);
var card7 = pField.getCard(6);
var card8 = pField.getCard(7);
var card9 = pField.getCard(8);
var card10 = pField.getCard(9);
var card11 = pField.getCard(10);
var card12 = pField.getCard(11);

var draw = SVG('drawing').size(500, 1000);

var rect = draw.rect(100, 150).fill('#000000').move(10,10).data(card1);
var text = draw.plain(card1.getColor()).fill('#FFFFFF').move(10,10);
var text = draw.plain(card1.getShape()).fill('#FFFFFF').move(10,20);
var text = draw.plain(card1.getPattern()).fill('#FFFFFF').move(10,30);
var text = draw.plain(card1.getNumber()).fill('#FFFFFF').move(10,40);

var rect2 = draw.rect(100, 150).fill('#000000').move(120, 10).data(card2);
var text = draw.plain(card2.getColor()).fill('#FFFFFF').move(120,10);
var text = draw.plain(card2.getShape()).fill('#FFFFFF').move(120,20);
var text = draw.plain(card2.getPattern()).fill('#FFFFFF').move(120,30);
var text = draw.plain(card2.getNumber()).fill('#FFFFFF').move(120,40);

var rect3 = draw.rect(100, 150).fill('#000000').move(230, 10).data(card3);
var text = draw.plain(card3.getColor()).fill('#FFFFFF').move(230,10);
var text = draw.plain(card3.getShape()).fill('#FFFFFF').move(230,20);
var text = draw.plain(card3.getPattern()).fill('#FFFFFF').move(230,30);
var text = draw.plain(card3.getNumber()).fill('#FFFFFF').move(230,40);

var rect4 = draw.rect(100, 150).fill('#000000').move(10,170).data(card4);
var text = draw.plain(card4.getColor()).fill('#FFFFFF').move(10,170);
var text = draw.plain(card4.getShape()).fill('#FFFFFF').move(10,180);
var text = draw.plain(card4.getPattern()).fill('#FFFFFF').move(10,190);
var text = draw.plain(card4.getNumber()).fill('#FFFFFF').move(10,200);

var rect5 = draw.rect(100, 150).fill('#000000').move(120, 170).data(card5);
var text = draw.plain(card5.getColor()).fill('#FFFFFF').move(120,170);
var text = draw.plain(card5.getShape()).fill('#FFFFFF').move(120,180);
var text = draw.plain(card5.getPattern()).fill('#FFFFFF').move(120,190);
var text = draw.plain(card5.getNumber()).fill('#FFFFFF').move(120,200);

var rect6 = draw.rect(100, 150).fill('#000000').move(230, 170).data(card6);
var text = draw.plain(card6.getColor()).fill('#FFFFFF').move(230,170);
var text = draw.plain(card6.getShape()).fill('#FFFFFF').move(230,180);
var text = draw.plain(card6.getPattern()).fill('#FFFFFF').move(230,190);
var text = draw.plain(card6.getNumber()).fill('#FFFFFF').move(230,200);

var rect7 = draw.rect(100, 150).fill('#000000').move(10,330).data(card7);
var text = draw.plain(card7.getColor()).fill('#FFFFFF').move(10,330);
var text = draw.plain(card7.getShape()).fill('#FFFFFF').move(10,340);
var text = draw.plain(card7.getPattern()).fill('#FFFFFF').move(10,350);
var text = draw.plain(card7.getNumber()).fill('#FFFFFF').move(10,360);

var rect8 = draw.rect(100, 150).fill('#000000').move(120, 330).data(card8);
var text = draw.plain(card8.getColor()).fill('#FFFFFF').move(120,330);
var text = draw.plain(card8.getShape()).fill('#FFFFFF').move(120,340);
var text = draw.plain(card8.getPattern()).fill('#FFFFFF').move(120,350);
var text = draw.plain(card8.getNumber()).fill('#FFFFFF').move(120,360);

var rect9 = draw.rect(100, 150).fill('#000000').move(230, 330).data(card9);
var text = draw.plain(card9.getColor()).fill('#FFFFFF').move(230,330);
var text = draw.plain(card9.getShape()).fill('#FFFFFF').move(230,340);
var text = draw.plain(card9.getPattern()).fill('#FFFFFF').move(230,350);
var text = draw.plain(card9.getNumber()).fill('#FFFFFF').move(230,360);

var rect10 = draw.rect(100, 150).fill('#000000').move(10,490).data(card10);
var text = draw.plain(card10.getColor()).fill('#FFFFFF').move(10,490);
var text = draw.plain(card10.getShape()).fill('#FFFFFF').move(10,500);
var text = draw.plain(card10.getPattern()).fill('#FFFFFF').move(10,510);
var text = draw.plain(card10.getNumber()).fill('#FFFFFF').move(10,520);

var rect11 = draw.rect(100, 150).fill('#000000').move(120, 490).data(card11);
var text = draw.plain(card11.getColor()).fill('#FFFFFF').move(120,490);
var text = draw.plain(card11.getShape()).fill('#FFFFFF').move(120,500);
var text = draw.plain(card11.getPattern()).fill('#FFFFFF').move(120,510);
var text = draw.plain(card11.getNumber()).fill('#FFFFFF').move(120,520);

var rect12 = draw.rect(100, 150).fill('#000000').move(230, 490).data(card12);
var text = draw.plain(card12.getColor()).fill('#FFFFFF').move(230,490);
var text = draw.plain(card12.getShape()).fill('#FFFFFF').move(230,500);
var text = draw.plain(card12.getPattern()).fill('#FFFFFF').move(230,510);
var text = draw.plain(card12.getNumber()).fill('#FFFFFF').move(230,520);

var i = 0;
var click = function() {
	if (i < 3){
		if ( this == rect){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card1);
			console.log(select);
		}

		else if ( this == rect2){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card2);
			console.log(select);
		}

		else if ( this == rect3){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card3);
			console.log(select);
		}

		else if ( this == rect4){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card4);
			console.log(select);
		}

		else if ( this == rect5){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card5);
			console.log(select);
		}

		else if ( this == rect6){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card6);
			console.log(select);
		}

		else if ( this == rect7){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card7);
			console.log(select);
		}

		else if ( this == rect8){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card8);
			console.log(select);
		}

		else if ( this == rect9){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card9);
			console.log(select);
		}

		else if ( this == rect10){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card10);
			console.log(select);
		}

		else if ( this == rect11){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card11);
			console.log(select);
		}

		else if ( this == rect12){
			this.fill({color:'#32CD32'});
			i++;
			select.selectCard(card12);
			console.log(select);
		}
		
	}
	if(select.checkSet()){
		
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

