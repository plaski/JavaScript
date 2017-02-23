function rysujChoinke(wysokoscChoinki) {
	for (var i = 1; i <= wysokoscChoinki; i++) {
		var star = '';

		for (var n = 0; n < i*2-1; n++) {
			 star += '*';
		}
		console.log(star);
	}
}
var wysokoscChoinki = prompt('Podaj liczbę poziomów choinki.');
rysujChoinke(wysokoscChoinki);