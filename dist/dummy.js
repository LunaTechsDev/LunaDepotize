// Generated by Haxe 4.1.3
(function ($global) { "use strict";
var Data = function() { };
var Main = function() { };
Main.main = function() {
	console.log("src/Main.hx:5:","Create Depot Support");
	console.log("src/Main.hx:6:",Data);
	var _g = 0;
	var _g1 = Data.Game_Dialogue.lines;
	while(_g < _g1.length) {
		var _g2 = 0;
		var _g3 = _g1[_g++].Dialogue_Text;
		while(_g2 < _g3.length) console.log("src/Main.hx:11:",_g3[_g2++].text);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Data.Game_Dialogue = { name : "Game Dialogue", lines : [{ "Dialogue_Text" : [{ text : "So, is this the first house you've bought yourself?", guid : "49ace83f-7b07-4357-8caf-06fc8c860c67", id : "0"},{ text : "Yes, it's quite a big purchase for me.", guid : "3f3e2113-eaea-4308-91e0-ec63b221d1d6", id : "1"},{ text : "Congratulations! I'm glad you decided to make the purchase!", guid : "f4ce33c1-4e10-4f29-92ca-e9e6e9d3aa33", id : "2"}], guid : "8954acf2-2590-4097-a9c5-be7cf4ffd0ff", id : "introduction"}], hidden : false, guid : "28912923-df8b-4878-b335-6efd001799b4", displayColumn : "id", description : "In game dialogue sequences", configurable : { name : "text", description : "text", displayColumn : "columnSelect@name", "columnSelect@name@displayColumn" : { allowedTypes : ["int","float","text","longtext"]}}, columns : [{ name : "Dialogue Text", description : "Text in the dialogue tree", iconName : "newList", guid : "a23b282c-efb2-4b59-b3bf-04929df418c6", configurable : { name : "text", description : "text"}, sheet : "36f305fc-1b9f-47e3-bb61-9d3739a50902", typeStr : "list"}]};
Main.main();
})({});