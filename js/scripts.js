var femaleNames = ['Ania', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Maciek', 'Piotrek', 'Andrzej', 'Arek'];
var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	var allNamesLength = allNames.push(newName);
};