/*!
 * reveal-decoreations.js
 * Decorations for Reveal JS Tool: http://revealjs.com
 *
 * Author: Carlos Bazilio
 */

var elems = document.getElementsByClassName('reveal_alternate');

var numElems = elems.length

var index_values = Array(numElems).fill(0);
var values = Array(numElems).fill([]);

function showValues() {
	for (var i = 0; i < elems.length; i++) {
		if (values[i].length == 0)
			values[i] = elems[i].getAttribute('values').split("|");
		elems[i].innerHTML = values[i][index_values[i] % 3];
	    index_values[i]++;
	}
}

setInterval(showValues, 1000);
