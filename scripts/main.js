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
	var newElement = '<div class="airButton" id="' + id + '">&nbsp</div>';

	$('.column').eq(colNumber).append(newElement);
	$('#' + id).mousedown(successRemove);

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

function successRemove() {
	$(this).remove();
}