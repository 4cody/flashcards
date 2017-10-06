var fs = require('fs');

cdCard = function (full, cloze, partial) {
	this.full = full;
	this.cloze = cloze;
	this.partial = partial;
}

var card1 = new cdCard (
"George Washington was the first president.",
"George Washington",
"... was the first president."
)

console.log(card1.full)
console.log(card1.cloze)
console.log(card1.partial)

fs.readFile("txt.txt", "utf8", function(error, data) {
	if(error) {
		return console.log(error)
	}
	var dataArr = data.split(",");

	console.log(dataArr);

	for (var i = 0; i < dataArr.length; i++){
		console.log(dataArr[i]);
	};
})
