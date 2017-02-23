var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCase = animal.toUpperCase();
var replacedText = text.replace('Papugi', animalUpperCase);
var halfOfReplacedText = replacedText.slice(0,replacedText.length/2);

console.log(halfOfReplacedText);