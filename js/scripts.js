function rysujChoinke(wysokoscChoinki) {
	for (var i = 0; i < wysokoscChoinki; i++) {
		var star = '';
		
		for (var i = 0; i < wysokoscChoinki*2-1; i++) {
			star += '*';
		}
		console.log(star);
	}
}
var wysokoscChoinki = prompt('Podaj liczbę poziomów choinki.');
rysujChoinke(wysokoscChoinki);