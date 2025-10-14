
generateTimeLine = (divs) =>
	"<div class=\"timeline\">" +
	generateDivs(languages).reduce((x,y) => x + y) +
	"</div>"

generateDivs = (subjects) => subjects.map(generateDiv)

generateDiv = (item, idx) => 
	"<div class=\"container " + leftOrRight(idx) + "\">" +
	    "<div class=\"content\">" +
	      "<h2>" + item.year + "</h2>" +
	      "<p>" + item.subject + "</p>" +
	    "</div>" +
	"</div>"

leftOrRight = idx => (idx % 2) == 0 ? 'left' : 'right';

