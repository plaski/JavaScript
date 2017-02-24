var buttonClassElements = document.getElementsByClassName('button');
var length = buttonClassElements.length;

console.log(length);

for (i = 0; i < length; i++){
console.log(buttonClassElements[i].innerText);
}