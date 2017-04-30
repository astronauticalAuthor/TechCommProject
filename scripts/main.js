var chars = ['a', 'b', 'c', 'd', 'e'];

function startGame() {
	tickGame();
}

function tickGame() {
	console.log("tickGame()");
	createIcon();

	setTimeout(tickGame, 1000);
}

function createIcon() {
	var id = '';
	for (var x = 0; x < 10; x++) {
		id += chars[Math.floor(Math.random() * 5)];
	}

	var colNumber = Math.floor(Math.random() * 4);
	var newElement = '<button class="airButton" id="' + id + '" onclick="successRemove(' + id + ')">&nbsp</button>';



	$('.column').eq(colNumber).append(newElement);

	fall(id);
}

function fall(id) {
	var top = parseInt($('#' + id).css('margin-top'));
	$('#' + id).css('margin-top', top + 4 + 'px');

	if (top + 4 <= parseInt($('.column').css('height')) + 64) {
		setTimeout(function() { fall(id); }, 10);
	}
	else {
		$('#' + id).remove();
	}
}

function successRemove(id) {
	id.remove();
}