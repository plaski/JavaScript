var a = prompt('Podaj pierwszą liczbę');
	b = prompt('Podaj drugą liczbę');
	value = (a*a) + (2*a*b) - (b*b);

console.log(value);

if (value > 0) {
	alert('Wynik to: ' +value+ ' i jest większy od zera.');
} else if (value < 0) {
	alert('Wynik to: ' +value+ ' i jest mniejszy od zera.');
} else {
	alert('Wynik to: ' +value+ ' i jal widać jest równy zeru.');
}