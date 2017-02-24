var list = document.getElementById('list');
var add = document.getElementById('addElem');
var rem = document.getElementById('remElem');
var number = document.getElementsByTagName('li');
add.addEventListener('click', function(){
	list.innerHTML += '<li>item ' + number.length + '</li>'
});
rem.addEventListener('click', function(){
	list.removeChild(list.childNodes[number.length+1])
});